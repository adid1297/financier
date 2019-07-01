import React from "react";
import Card from "../../components/Card";

const MemberEntry = () => (
  <div className="member-entry-container">
    <div className="member-entry-photo-wrapper">
      <i className="fas fa-user-astronaut" />
    </div>
    <div className="member-entry-overview">
      <h3>
        Name <i class="fas fa-edit" />
      </h3>
      <h6>Contact Number</h6>
      <h6>Email</h6>
    </div>
    <div className="member-entry-overview">
      <h6>Balance</h6>
      <h3>P1062.00</h3>
      <h5>Owed or Lent</h5>
    </div>
  </div>
);

const MemberList = ({ members = ["1", "2", "3"] }) => (
  <Card>
    {members.map(() => (
      <MemberEntry />
    ))}
  </Card>
);

export default MemberList;
