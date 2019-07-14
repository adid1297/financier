import { connect } from 'react-redux';

import { getGroupId, getGroupMembers } from '../../store/selectors'
import MemberList from "./MemberList";

const mapStateToProps = (state, ownProps) => ({
  members: Object.values(
    getGroupMembers(state, getGroupId(ownProps)) || {}
  ),
});

export default connect(mapStateToProps)(MemberList);
