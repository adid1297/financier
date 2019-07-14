import { GroupActionConstants } from '../actions/GroupActions';
import { MemberActionConstants } from '../actions/MemberActions';

const initialState = {
  groups: 1,
  members: 1,
  expenses: 1,
  payments: 1,
}

const indexCounter = (state = initialState, action) => {
  switch (action.type) {
    case GroupActionConstants.ADD_GROUP:
      return {
        ...state,
        groups: state.groups + 1,
      };
    case MemberActionConstants.ADD_MEMBER:
      return {
        ...state,
        members: state.members + 1,
      };
    default:
      return state;
  }
};

export default indexCounter;
