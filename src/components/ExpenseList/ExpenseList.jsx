import React from "react";

import "../../styles/member-list.css";

const ExpenseEntry = ({ expense }) => (
  <div className="member-container">
    <i className="member-photo fas fa-user-astronaut" />
    <h3 className="member-overview">{expense.description}</h3>
    <h3 className="member-overview">{expense.amount}</h3>
    <h3 className="member-overview">{expense.paidFor.name}</h3>
    <h3 className="member-overview">{expense.paidBy.name}</h3>
  </div>
);


const ExpenseList = ({ expenses }) => (
  <div className="member-list card">
    {expenses.map(expense => <ExpenseEntry expense={expense} />)}
  </div>
);

export default ExpenseList;
