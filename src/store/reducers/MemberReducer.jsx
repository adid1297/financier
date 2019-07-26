import { MemberActionConstants } from '../actions/MemberActions';

const defaulter = {
  1 : {
    name: 'Louise',
    memberId: 1,
    groupId: 1,
  },
  2: {
    name: 'Juni',
    memberId: 2,
    groupId: 1,
  },
  3: {
    name: 'Aaron',
    memberId: 3,
    groupId: 1,
  },
  4: {
    name: 'Jay',
    memberId: 4,
    groupId: 2,
  },
  5: {
    name: 'Hans',
    memberId: 5,
    groupId: 2,
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
