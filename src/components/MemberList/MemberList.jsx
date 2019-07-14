import React from "react";

import "../../styles/member-list.css";

const MemberEntry = ({ name }) => (
  <div className="member-container">
    <i className="member-photo fas fa-user-astronaut" />
    <h3 className="member-overview">{name}</h3>
  </div>
);


const MemberList = ({ members }) => (
  <div className="member-list card">
    {members.map(member => <MemberEntry name={member.name}/>)}
  </div>
);

export default MemberList;
