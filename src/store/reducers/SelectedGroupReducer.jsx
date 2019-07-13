import { GroupActionConstants } from '../actions/GroupActions';

const selectedGroup = (state = null, action) => {
  switch (action.type) {
    case GroupActionConstants.ADD_GROUP:
      return action.id;
    default:
      return state;
  }
};

export default selectedGroup;
