import { MemberActionConstants } from '../actions/MemberActions';

const defaulter = {
  1 : {
    name: 'Person A',
    memberId: 1,
    groupId: 1,
  },
  2: {
    name: 'Person B',
    memberId: 2,
    groupId: 1,
  },
  3: {
    name: 'Person C',
    memberId: 3,
    groupId: 1,
  }
}

const members = (state = defaulter, action) => {
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
