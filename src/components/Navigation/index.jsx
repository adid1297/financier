import { connect } from 'react-redux';

import { getGroupId } from '../../store/selectors';
import Navigation from './Navigation';

const mapStateToProps = (state, ownProps) => ({
  context: `/group/${getGroupId(ownProps)}`,
});

export default connect(mapStateToProps)(Navigation);
