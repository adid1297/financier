import React from "react";

import MemberWidget from "./MemberWidget";
import "../styles/group-field.css";

export const GroupField = () => (
  <div className="group-field-container">
    <div className="wide-input-wrapper">
      <input type="text" placeholder="Group Name" />
    </div>
  </div>
);

const GroupEntry = ({ name, balance, members }) => {
  return (
    <div className="group-entry-container">
      <div className="group-photo-container">
        <i className="fas fa-user-astronaut" />
      </div>
      <div className="group-details">
        <div className="group-details-header">
          <h3 className="group-name">{name}</h3>
        </div>
        <div className="group-members">
          <MemberWidget />
        </div>
      </div>
      <div className="group-entry-actions">
        <i className="fas fa-bars" />
      </div>
    </div>
  );
};

const GroupFieldExpanded = () => {
  const groupData = [
    {
      name: "Team Ba",
      balance: 1000.0,
      createDate: "21-Mar-2017",
      lastOpenedDate: "22-Mar-2019",
      members: []
    },
    {
      name: "Team Ba",
      balance: 1000.0,
      createDate: "21-Mar-2017",
      lastOpenedDate: "22-Mar-2019",
      members: []
    },
    {
      name: "Team Ba",
      balance: 1000.0,
      createDate: "21-Mar-2017",
      lastOpenedDate: "22-Mar-2019",
      members: []
    }
  ];

  const groups = groupInput =>
    groupInput.map(group => <GroupEntry {...group} />);

  return (
    <div className="group-field-container expanded">
      <div className="group-field-expanded-header-wrapper">
        <h3 className="group-field-expanded-header">Groups</h3>
        <hr className="group-field-expanded-header-divider" />
      </div>
      <div className="group-entries-container">{groups(groupData)}</div>
    </div>
  );
};

export default GroupFieldExpanded;
