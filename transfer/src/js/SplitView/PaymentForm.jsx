import React from "react";
import Card from "../../components/Card";

const PaymentForm = () => (
  <Card>
    <div className="expense-form-row">
      <select className="form-input expense-form-name-select">
        <option>Alfonso</option>
        <option>Erika</option>
        <option>Citroen</option>
        <option>Demmy</option>
      </select>

      <input className="form-input expense-form-amount" placeholder="Paid" />

      <select className="form-input expense-form-name-select">
        <option>Alfonso</option>
        <option>Erika</option>
        <option>Citroen</option>
        <option>Demmy</option>
      </select>
    </div>
    <div className="expense-form-row">
      <input
        className="form-input expense-form-description"
        placeholder="New Item"
      />
      <button className="expense-form-submit">
        <i class="fas fa-plus-square" />
      </button>
    </div>
  </Card>
);

export default PaymentForm;
