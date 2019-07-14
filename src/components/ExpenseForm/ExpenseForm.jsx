import React, { useState } from "react";

import "../../styles/expense-form.css";

const ExpenseFormInput = ({ fieldName, ...props }) => (
  <input
    type="text"
    className={`form-input expense-form-${fieldName}`}
    {...props}
  />
);

const MemberSelect = ({ fieldName, members, ...props }) => (
  <select className={`form-input expense-form-name-${fieldName}`} {...props}>
    {members.map(member =>
      <option key={`${fieldName} ${member.id}`} value={member.memberId}>
        {member.name}
      </option>
    )}
  </select>
)

const useHandler = handleChange => {
  return (event) => handleChange(event.target.value);
};

const ExpenseForm = ({ members, createExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [paidBy, setPaidBy] = useState('');
  const [paidFor, setPaidFor] = useState('');

  const handleSubmit = () => createExpense(
    description,
    parseInt(amount),
    paidBy,
    paidFor
  );

  return (
    <div className="card">
      <div className="expense-form-row">
        <ExpenseFormInput
          fieldName="description"
          placeholder="New Item"
          value={description}
          onChange={useHandler(setDescription)}
        />
        <ExpenseFormInput
          fieldName="amount"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={useHandler(setAmount)}
        />
      </div>
      <div className="expense-form-row">
        <MemberSelect
          fieldName="paidBy"
          members={members}
          value={paidBy}
          onChange={useHandler(setPaidBy)}
        />
        <MemberSelect
          fieldName="paidFor"
          members={members}
          value={paidFor}
          onChange={useHandler(setPaidFor)}
        />
        <button className="expense-form-submit" onClick={handleSubmit}>
          Go
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
