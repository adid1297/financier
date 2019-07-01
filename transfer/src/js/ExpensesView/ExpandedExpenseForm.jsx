import React from "react";
import Card from "../../components/Card";

const ExpandedExpenseForm = () => (
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
      <input className="form-input expense-form-note" placeholder="Notes" />
      <input
        className="form-input expense-form-date"
        type="number"
        placeholder="Date"
      />
      <input
        className="form-input expense-form-time"
        type="number"
        placeholder="Time"
      />
    </div>
    <hr />
    <div className="expense-form-row">
      <div className="expense-form-multi-line">
        <h5>Paid By</h5>
        <div className="expense-form-line-item">
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
        <div className="expense-form-line-item">
          <h5>Dmitry</h5>
          <input type="text" placeholder="amt" />x
        </div>
      </div>
      <div className="expense-form-multi-line">
        <h5>For</h5>
        <div className="expense-form-line-item">
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
      </div>
    </div>
  </Card>
);

export default ExpandedExpenseForm;
