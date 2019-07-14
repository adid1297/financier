import { connect } from 'react-redux';

import ExpenseActions from "../../store/actions/ExpenseActions";
import { getGroupId, getGroupMembers } from '../../store/selectors';
import ExpenseForm from "./ExpenseForm";

const mapStateToProps = (state, ownProps) => ({
  currExpenseIndex: state.indexCounter.expenses,
  members: getGroupMembers(state, getGroupId(ownProps)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createExpense: (expenseId, ...args) =>
    dispatch(ExpenseActions.addExpense(expenseId, getGroupId(ownProps), ...args)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  members: Object.values(stateProps.members || {}),
  createExpense: (...args) =>
    dispatchProps.createExpense(stateProps.currExpenseIndex, ...args),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ExpenseForm
);
