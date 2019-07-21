export const getGroupId = ownProps => parseInt(ownProps.match.params.groupId);

export const getGroupMembers = (state, groupId) => {
  const { groups, members } = state;
  if (!groups || !(groupId in groups) || !members) {
    return {};
  };

  return groups[groupId].members.reduce(
    (groupMembers, memberId) =>
      (memberId in members) ?
        { ...groupMembers, [memberId]: members[memberId] } :
        groupMembers,
    {}
  );
}

export const getDetailedExpense = (state, expenseId) => {
  const { members, expenses } = state;

  if (!members || !expenses || !(expenseId in expenses)) {
    return {};
  }

  const expense = expenses[expenseId];
  return {
    ...expense,
    paidFor: members[expense.paidFor],
    paidBy: members[expense.paidBy],
  };
}

export const getGroupExpenses = (state, groupId) => {
  const { groups, members, expenses } = state;

  if (!groups || !(groupId in groups) || !members || !expenses) {
    return {};
  };

  return groups[groupId].expenses.reduce(
    (groupExpenses, expenseId) =>
      (expenseId in expenses) ?
        { ...groupExpenses, [expenseId]: getDetailedExpense(state, expenseId) } :
        groupExpenses,
    {}
  )
}


const getBalance = expenses => expenses.reduce(
  (balance, { amount, paidBy, paidFor }) => ({
    ...balance,
    [paidBy.memberId]: (balance[paidBy.memberId] || 0) + amount,
    [paidFor.memberId]: (balance[paidFor.memberId] || 0) - amount,
  }), {}
);

const suggestPayments = balance => {
  const runningBalance = Object.assign({}, balance);
  const toPay = Object.keys(balance).filter(balanceKey => balance[balanceKey] > 0);
  const inDebt = Object.keys(balance).filter(balanceKey => balance[balanceKey] < 0);

  const payments = [];
  toPay.forEach(personToPay => {
    let balanceToPay = runningBalance[personToPay];
    while (balanceToPay > 0) {
      const candidate = inDebt.filter(personInDebt => runningBalance[personInDebt] < 0)[0];
      const owedAmount = Math.abs(runningBalance[candidate])
      const payAmount = (balanceToPay >= owedAmount) ? owedAmount : balanceToPay;

      balanceToPay -= payAmount;
      runningBalance[candidate] += payAmount;

      payments.push({
        amount: payAmount,
        from: candidate,
        to: personToPay,
      });
    };
  });

  return payments;
};

export const getSuggestedPaymentsFromState = (state, groupId) => {
  const expenses = getGroupExpenses(state, groupId);

  if (!expenses) {
    return {};
  }

  const expenseArray = Object.values(expenses);
  const suggestions = suggestPayments(getBalance(expenseArray));
  return suggestions.map(item => ({
    ...item,
    from: state.members[item.from].name,
    to: state.members[item.to].name,
  }));
}
