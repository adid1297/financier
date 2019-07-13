import React, { useState, useRef } from "react";
// import MemberWidget from "./MemberWidget";
import "../../styles/group-field.css";

export const NewGroupNameInput = ({ createGroup }) => {
  const inputNode = useRef(null);

  const [newGroupName, setGroupName] = useState('');
  const onChange = event => setGroupName(event.target.value);
  const onKeyPress = ({ key }) => {
    if (key === "Enter") {
      createGroup(newGroupName);
      setGroupName('');
      inputNode.current.blur();
    };
  }


  return (
    <div className="group-field-expanded-header-wrapper">
      <div className="wide-input-wrapper">
        <input
          type="text"
          className="group-field-input"
          value={newGroupName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="New Group Name"
          ref={inputNode}
          autoFocus
        />
      </div>
        {/* <i class="fas fa-times" />
        <i class="fas fa-greater-than" /> */}
      <hr className="group-field-expanded-header-divider" />
    </div>
  );
};

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
        {/* <div className="group-members">
          <MemberWidget />
        </div> */}
      </div>
      {/* <div className="group-entry-actions">
        <i className="fas fa-bars" />
      </div> */}
    </div>
  );
};

const SavedGroups = ({ savedGroups }) => (
  <div className="group-entries-container">
    {savedGroups.length ?
      savedGroups.map(
        group => <GroupEntry name={group.name} key={`group-${group.id}`}/>
      ) : <em>No Groups Found</em>}
  </div>
);

const IdleDisplayText = ({ selectedGroup }) => (
  <h3 className="group-field-expanded-header">
    {selectedGroup ? selectedGroup.name : 'Create New Group'}
  </h3>
);

const GroupField = ({ savedGroups, createGroup, selectedGroup }) => {
  const [isExpanded, toggleExpand] = useState(false);

  return (
    <div
      className={`group-field-container ${isExpanded && 'expanded'}`}
      onClick={() => toggleExpand(true)}
      onBlur={() => toggleExpand(false)}
    >
      {isExpanded ?
        <>
          <NewGroupNameInput createGroup={createGroup} />
          <SavedGroups savedGroups={savedGroups} />
        </> :
        <IdleDisplayText selectedGroup={selectedGroup} />}
    </div>
  );
}

export default GroupField;
