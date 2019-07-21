import React from "react";

import { CardTitle } from "../.common";
import "../../styles/suggested-payments-list.css";

const SuggestionItem = ({ amount, from, to }) => (
  <div className="suggestion">
    <span className="suggestion-detail name">{from}</span>
    {` pays `}
    <span className="suggestion-detail amount">{amount}</span>
    {` to `}
    <span className="suggestion-detail name">{to}</span>
  </div>
)

const SuggestedPaymentsList = ({ suggestedPayments }) => (
  <div className="suggestion-list card">
    <CardTitle title="Suggested Payments" />
    {suggestedPayments.map(suggestion => <SuggestionItem {...suggestion} />)}
  </div>
)

export default SuggestedPaymentsList;
