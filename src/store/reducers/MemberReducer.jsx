import { MemberActionConstants } from '../actions/MemberActions';

const members = (state = null, action) => {
  switch (action.type) {
    case MemberActionConstants.ADD_MEMBER:
      return {
        ...state,
        [action.memberId]: {
          name: action.name,
          memberId: action.memberId,
          groupId: action.groupId,
        }
      };
    default:
      return state;
  }
};

export default members;
