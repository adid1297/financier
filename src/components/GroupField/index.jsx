import { connect } from 'react-redux';

import GroupActions from "../../store/actions/GroupActions";
import GroupField from "./GroupField";

const mapStateToProps = state => ({
  currGroupIndex: state.indexCounter.groups,
  savedGroups: Object.values(state.groups || {}),
  selectedGroup: state.groups && state.selectedGroup && state.groups[state.selectedGroup],
});

const mapDispatchToProps = dispatch => ({
  createGroupWithId: (id, name) => dispatch(GroupActions.addGroup(name, id)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  createGroup: name => dispatchProps.createGroupWithId(
    stateProps.currGroupIndex, name
  ),
  savedGroups: stateProps.savedGroups,
  selectedGroup: stateProps.selectedGroup,
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  GroupField
);
