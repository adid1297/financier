import { ExpenseActionConstants } from '../actions/ExpenseActions';

const defaulter = {
  1: {
    expenseId: 1,
    groupId: 1,
    description: 'Potion',
    amount: 20,
    paidBy: 1,
    paidFor: 2,
  },
  2: {
    expenseId: 2,
    groupId: 1,
    description: 'Elixir',
    amount: 30,
    paidBy: 1,
    paidFor: 3,
  },
  3: {
    expenseId: 3,
    groupId: 1,
    description: 'Revive',
    amount: 5,
    paidBy: 3,
    paidFor: 2,
  }
}

const expenses = (state = defaulter, action) => {
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
