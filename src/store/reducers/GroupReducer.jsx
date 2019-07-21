import { GroupActionConstants } from '../actions/GroupActions';
import { MemberActionConstants } from '../actions/MemberActions';
import { ExpenseActionConstants } from '../actions/ExpenseActions';

const defaulter = {
  1 : {
    id: 1,
    name: 'Alivia',
    members: [1, 2, 3],
    expenses: [1, 2, 3],
    payments: [],
  },
  2 : {
    id: 2,
    name: 'Invcessant',
    members: [],
    expenses: [],
    payments: [],
  }
}

const groups = (state = defaulter, action) => {
  switch (action.type) {
    case GroupActionConstants.ADD_GROUP:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          members: [],
          expenses: [],
          payments: [],
        }
      };
    case MemberActionConstants.ADD_MEMBER:
      return {
        ...state,
        [action.groupId]: {
          ...state[action.groupId],
          members: [
            ...state[action.groupId].members,
            action.memberId,
          ]
        }
      };
    case ExpenseActionConstants.ADD_EXPENSE:
      return {
        ...state,
        [action.groupId]: {
          ...state[action.groupId],
          expenses: [
            ...state[action.groupId].expenses,
            action.expenseId,
          ]
        }
      };
    default:
      return state;
  }
};

export default groups;
