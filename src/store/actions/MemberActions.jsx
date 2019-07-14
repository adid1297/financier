export const MemberActionConstants = {
  ADD_MEMBER: 'ADD_MEMBER'
};

export const addMember = (name, memberId, groupId) => ({
  type: MemberActionConstants.ADD_MEMBER,
  name,
  memberId,
  groupId,
});

export default {
  addMember
};
