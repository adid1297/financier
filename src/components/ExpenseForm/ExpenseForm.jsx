import React, { useState } from "react";

import "../../styles/expense-form.css";

const ExpenseFormInput = ({ fieldName, ...props }) => (
  <input
    type="text"
    className={`expense-form-input form-input fill ${fieldName}-input`}
    {...props}
  />
);

const MemberSelect = ({ fieldName, members, placeholder, ...props }) => (
  <select
    className={`expense-form-input form-input fill name-select ${fieldName}-input`}
    {...props}
  >
    <option value="" selected disabled>
      {placeholder}
    </option>
    {members.map((member, index) =>
      <option
        key={`${fieldName} ${member.id}`}
        value={member.memberId}
      >
        {member.name}
      </option>
    )}
  </select>
);

const useHandler = handleChange => {
  return (event) => handleChange(event.target.value);
};

const ExpenseForm = ({ members, createExpense }) => {
  const [description, setDescription] = useState(null);
  const [amount, setAmount] = useState(null);
  const [paidBy, setPaidBy] = useState(null);
  const [paidFor, setPaidFor] = useState(null);

  const canSubmit = (description && amount > 0 && paidBy && paidFor);
  const handleSubmit = () => {
    if (canSubmit) {
      createExpense(
        description,
        parseInt(amount),
        paidBy,
        paidFor
      );
      setDescription('');
      setAmount('');
    };
  };

  return (
    <div className="expense-form-container card">
      <div className="expense-form-row">
        <ExpenseFormInput
          fieldName="description"
          placeholder="Expense Description"
          value={description}
          onChange={useHandler(setDescription)}
        />
        <ExpenseFormInput
          fieldName="amount"
          placeholder="Expense Amount"
          type="number"
          value={amount}
          onChange={useHandler(setAmount)}
        />
      </div>
      <div className="expense-form-row">
        <MemberSelect
          fieldName="paidBy"
          placeholder="Paid by"
          members={members}
          value={paidBy}
          onChange={useHandler(setPaidBy)}
        />
        <MemberSelect
          fieldName="paidFor"
          placeholder="Paid for"
          members={members}
          value={paidFor}
          onChange={useHandler(setPaidFor)}
        />
        <button
          className={`expense-form-submit ${canSubmit ? 'can-submit' : ''}`}
          onClick={handleSubmit}
        >
          <i className="material-icons">
            add_circle_outline
          </i>
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
