import { GroupActionConstants } from '../actions/GroupActions';
import { MemberActionConstants } from '../actions/MemberActions';

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
    default:
      return state;
  }
};

export default groups;
