import React from "react";
import Card from "../../components/Card";

const ExpenseForm = () => (
  <Card>
    <div className="expense-form-row">
      <input
        className="form-input expense-form-description"
        placeholder="New Item"
      />
      <input
        className="form-input expense-form-amount"
        type="number"
        placeholder="Amount"
      />
    </div>
    <div className="expense-form-row">
      <select className="form-input expense-form-name-select">
        <option>Alfonso</option>
        <option>Erika</option>
        <option>Citroen</option>
        <option>Demmy</option>
      </select>
      <select className="form-input expense-form-name-select">
        <option>Alfonso</option>
        <option>Erika</option>
        <option>Citroen</option>
        <option>Demmy</option>
      </select>
      <button className="expense-form-submit">
        <i class="fas fa-plus-square" />
      </button>
    </div>
  </Card>
);

export default ExpenseForm;
