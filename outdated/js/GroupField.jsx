import React, { useState } from "react";
import { connect } from 'react-redux';

import GroupActions from "../store/actions/GroupActions";
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
      {/* <div className="group-entry-actions">
        <i className="fas fa-bars" />
      </div> */}
    </div>
  );
};

const GroupFieldExpanded = ({ createNewGroup, currentIndex }) => {
  const [isExpanded, toggleExpand] = useState(false);
  const toggleFieldExpand = () => toggleExpand(!isExpanded);

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

  return isExpanded ? (
    <div className="group-field-container expanded" onBlur={() => createNewGroup('derp', currentIndex)}>
      <div className="group-field-expanded-header-wrapper">
        <input type="text" className="group-field-input" placeholder="New Group Name" autoFocus />
          <hr className="group-field-expanded-header-divider" />
      </div>
      <div className="group-entries-container">{groups(groupData)}</div>
    </div>
  ) : (
    <div className="group-field-container" onClick={() => toggleFieldExpand()}>
      <h3 className="group-field-expanded-header">Create New Group</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  currentIndex: state.indexCounter.groups,
})

const mapDispatchToProps = dispatch => ({
  createNewGroup: (name, index) => dispatch(GroupActions.addGroup(name, index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  GroupFieldExpanded
);
