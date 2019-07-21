import React from "react";

const SuggestionItem = ({ amount, from, to }) => (
  <div className="suggestion">
    <strong>{from}</strong> pays <strong> {amount} </strong> to <strong>{to}</strong>
  </div>
)

const SuggestedPaymentsList = ({ suggestedPayments }) => (
  <div className="suggested-payments-list">
    {suggestedPayments.map(suggestion => <SuggestionItem {...suggestion} />)}
  </div>
)

export default SuggestedPaymentsList;
