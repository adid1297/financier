import React from "react";
import Card from "../../components/Card";

const ExpenseItem = () => (
  <div className="expense-item-container">
    <div className="expense-item-left-details">
      <h2>$ 1,000.00</h2>
      <h6>June 13, '19 | 3:43 PM</h6>
    </div>
    <div className="expense-item-right-details">
      <h3>A Karat of Gold</h3>
      <p>
        Paid by <strong>Alfonso</strong> for <strong> Aretha </strong>
      </p>
    </div>
    <div className="expense-item-actions">
      <i className="fas fa-bars" />
    </div>
  </div>
);

const ExpenseList = ({ members = ["1", "2", "3"] }) => (
  <Card className="expense-item-list-container">
    {members.map(() => (
      <ExpenseItem />
    ))}
    <div className="expense-list-settle-wrapper">
      <button className="expense-list-settle-up">Settle Up</button>
    </div>
  </Card>
);

export default ExpenseList;
