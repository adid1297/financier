import { connect } from 'react-redux';

import { getGroupId, getGroupExpenses } from '../../store/selectors'
import ExpenseList from "./ExpenseList";

const mapStateToProps = (state, ownProps) => ({
  expenses: Object.values(
    getGroupExpenses(state, getGroupId(ownProps))
  ),
});

export default connect(mapStateToProps)(ExpenseList);
