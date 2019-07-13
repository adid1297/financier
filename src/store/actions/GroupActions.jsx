export const GroupActionConstants = {
  ADD_GROUP: 'ADD_GROUP'
};

export const addGroup = (name, id) => ({
  type: GroupActionConstants.ADD_GROUP,
  name,
  id,
});

export default {
  addGroup
};
