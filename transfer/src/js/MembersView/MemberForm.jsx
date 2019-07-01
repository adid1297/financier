import React from "react";
import Card from "../../components/Card";

// const MemberForm = () => (
//   <Card>
//     <input placeholder="Member Name" />
//     <input placeholder="Number" />
//     <input placeholder="Email Address" />
//     <button> camera </button>
//     <button> add </button>
//     <button> v </button>
//   </Card>
// );

const MemberForm = () => (
  <Card className="member-form">
    <div className="expense-form-row">
      <input className="form-input" placeholder="Member Name" />
    </div>
    <div className="expense-form-row">
      <input className="form-input" placeholder="Number" />
      <input className="form-input" placeholder="Email Address" />

      <button className="expense-form-submit">
        <i class="fas fa-plus-square" />
      </button>
    </div>
  </Card>
);

export default MemberForm;
