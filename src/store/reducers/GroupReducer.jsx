import { GroupActionConstants } from '../actions/GroupActions';

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
    default:
      return state;
  }
};

export default groups;
