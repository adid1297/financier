import { connect } from 'react-redux';

import GroupActions from "../../store/actions/GroupActions";
import GroupField from "./GroupField";

const getSelectedGroup = (id, groups = {}) =>
  (id && groups && id in groups) ? groups[id] : null;

const mapStateToProps = state => ({
  currGroupIndex: state.indexCounter.groups,
  savedGroups: state.groups,
});

const mapDispatchToProps = dispatch => ({
  createGroupWithId: (id, name) => dispatch(GroupActions.addGroup(name, id)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  createGroup: name => {
    dispatchProps.createGroupWithId(
      stateProps.currGroupIndex, name
    );
    ownProps.history.push(`/group/${stateProps.currGroupIndex}`)
  },
  savedGroups: Object.values(stateProps.savedGroups || {}),
  selectedGroup: getSelectedGroup(ownProps.match.params.groupId, stateProps.savedGroups),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  GroupField
);
