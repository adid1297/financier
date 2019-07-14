import { connect } from 'react-redux';

import { getGroupId, getGroupMembers } from '../../store/selectors'
import MemberList from "./MemberList";


// const mapStateToProps = (state, ownProps) => ({
//   members: Object.values(
//     getGroupMembers(state, getGroupId(ownProps)) || {}
//   ),
// });

const mapStateToProps = (state, ownProps) => {
  console.log('mappperino', getGroupMembers(state, getGroupId(ownProps)));
  return {
    members: Object.values(
      getGroupMembers(state, getGroupId(ownProps)) || {}
    ),
  }
};

export default connect(mapStateToProps)(MemberList);
