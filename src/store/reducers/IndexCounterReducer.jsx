import { GroupActionConstants } from '../actions/GroupActions';

const initialState = {
  groups: 1,
  people: 1,
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
    default:
      return state;
  }
};

export default indexCounter;
