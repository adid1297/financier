import React from "react";
import MemberForm from "./MemberForm";
import MemberList from "./MemberList";

import "../../../styles/expenses.css";
import "../../../styles/members.css";

const MembersView = () => (
  <div>
    <MemberForm />
    <MemberList />
  </div>
);

export default MembersView;
