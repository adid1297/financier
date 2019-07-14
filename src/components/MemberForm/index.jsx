import { connect } from 'react-redux';

import { getGroupId, getGroupMembers } from '../../store/selectors';
import MemberActions from "../../store/actions/MemberActions";
import MemberForm from "./MemberForm";


const mapStateToProps = (state, ownProps) => ({
  currMemberIndex: state.indexCounter.members,
  members: getGroupMembers(state, getGroupId(ownProps)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createMember: (name, memberId) =>
    dispatch(MemberActions.addMember(name, memberId, getGroupId(ownProps))),
});

const mergeProps = (stateProps, dispatchProps) => ({
  createMember: name => dispatchProps.createMember(name, stateProps.currMemberIndex),
  members: Object.values(stateProps.members || {}),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  MemberForm
);
