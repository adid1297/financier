import { ExpenseActionConstants } from '../actions/ExpenseActions';

const expenses = (state = null, action) => {
  switch (action.type) {
    case ExpenseActionConstants.ADD_EXPENSE:
      return {
        ...state,
        [action.expenseId]: {
          expenseId: action.expenseId,
          groupId: action.groupId,
          description: action.description,
          amount: action.amount,
          paidBy: action.paidBy,
          paidFor: action.paidFor,
        }
      };
    default:
      return state;
  }
};

export default expenses;
