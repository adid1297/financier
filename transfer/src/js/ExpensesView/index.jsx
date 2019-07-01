import React from "react";

import { GroupField } from "../GroupField";
import ToggleNav from "../ToggleNav";
import ExpenseForm from "./ExpenseForm";
import ExpandedExpenseForm from "./ExpandedExpenseForm";
import ExpenseList from "./ExpenseList";

import "../../../styles/expenses.css";

const Component = () => (
  <div>
    <GroupField />
    <ToggleNav />
    <ExpenseForm />
    <ExpandedExpenseForm />
    <ExpenseList />
  </div>
);

export default Component;
