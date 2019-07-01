import React from "react";
import Card from "../../components/Card";

const SplitSuggestionItem = () => (
  <div className="expense-item-container">
    <div className="expense-item-left-details">
      <h2>$ 1,000.00</h2>
    </div>
    <div className="expense-item-right-details">
      <h3>
        Person A <i class="fas fa-arrow-right" /> Person B
      </h3>
    </div>
    <div className="expense-item-actions">
      <i className="fas fa-bars" />
    </div>
  </div>
);

const SplitSuggestionList = ({ members = ["1", "2", "3"] }) => (
  <Card className="expense-item-list-container">
    {members.map(() => (
      <SplitSuggestionItem />
    ))}
  </Card>
);

export default SplitSuggestionList;
