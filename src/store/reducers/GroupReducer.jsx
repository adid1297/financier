import { GroupActionConstants } from '../actions/GroupActions';
import { MemberActionConstants } from '../actions/MemberActions';
import { ExpenseActionConstants } from '../actions/ExpenseActions';

const groups = (state = null, action) => {
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
