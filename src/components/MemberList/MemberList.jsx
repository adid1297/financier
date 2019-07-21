import React from "react";

import { CardTitle } from "../.common";
import "../../styles/member-list.css";

const EmptyMemberList = () => (
  <div className="member-list-empty">
    <i className="member-list-empty-icon material-icons">
      person_outline
    </i>
    <div className="member-list-empty-text">
      <p>This group doesn't have any members.</p>
      <p>Add a member using the form above.</p>
    </div>
  </div>
)

const MemberEntry = ({ name }) => (
  <div className="member-container">
    <i className="member-icon fas fa-smile" />
    <h3 className="member-overview">{name}</h3>
  </div>
);

const MemberList = ({ members }) => (
  <div className="member-list card">
    <CardTitle title="Members" />
    {members.length === 0 ?
      <EmptyMemberList /> :
      members.map(member => <MemberEntry name={member.name}/>)
    }
  </div>
);

export default MemberList;
