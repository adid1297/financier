export const ExpenseActionConstants = {
  ADD_EXPENSE: 'ADD_EXPENSE'
};

export const addExpense = (expenseId, groupId, description, amount, paidBy, paidFor) => ({
  type: ExpenseActionConstants.ADD_EXPENSE,
  expenseId,
  groupId,
  description,
  amount,
  paidBy,
  paidFor,
});

export default {
  addExpense
};
