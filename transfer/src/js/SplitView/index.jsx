import React from "react";

import { GroupField } from "../GroupField";
import ToggleNav from "../ToggleNav";
import PaymentForm from "./PaymentForm";
import SplitBreakdownList from "./SplitBreakdownList";

import "../../../styles/expenses.css";
import "../../../styles/split.css";

const Component = () => (
  <div>
    <GroupField />
    <ToggleNav />
    <PaymentForm />
    <SplitBreakdownList />
  </div>
);

export default Component;
