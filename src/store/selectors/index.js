export const getGroupId = ownProps => parseInt(ownProps.match.params.groupId);

export const getGroupMembers = (state, groupId) => {
  const { groups, members } = state;
  if (!(groupId in groups) || !members) {
    return {};
  };

  return groups[groupId].members.reduce(
    (groupMembers, memberId) =>
      (memberId in members) ?
        { ...groupMembers, [memberId]: members[memberId] } :
        groupMembers,
    {}
  );
}
