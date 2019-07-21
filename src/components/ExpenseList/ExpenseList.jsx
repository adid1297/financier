import React from "react";

import { CardTitle } from "../.common";
import "../../styles/expense-list.css";

const ExpenseEntry = ({ expense }) => (
  <div className="expense-container">
    <div className="expense-header">
      <span className="expense-description">{expense.description}</span>
      {`, `}
      <span className="expense-amount">{expense.amount}</span>
    </div>
    <div className="expense-details">
      Paid by <span className="expense-name-detail">{expense.paidBy.name}</span>
      {` `}
      for <span className="expense-name-detail">{expense.paidFor.name}.</span>
    </div>
  </div>
);


const ExpenseList = ({ expenses }) => (
  <div className="expense-list card">
    <CardTitle title="Expenses" />
    {expenses.map(expense => <ExpenseEntry expense={expense} />)}
  </div>
);

export default ExpenseList;
