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
