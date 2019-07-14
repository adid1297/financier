import { connect } from 'react-redux';

import { getGroupId, getSuggestedPaymentsFromState } from '../../store/selectors'
import SuggestedPaymentsList from "./SuggestedPaymentsList";

const mapStateToProps = (state, ownProps) => ({
  suggestedPayments: getSuggestedPaymentsFromState(state, getGroupId(ownProps)),
});

export default connect(mapStateToProps)(SuggestedPaymentsList);
