import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import MemberWidget from "./MemberWidget";
import "../../styles/group-field.css";

export const NewGroupNameInput = ({ createGroup, collapseParent }) => {
  const inputNode = useRef(null);

  const [newGroupName, setGroupName] = useState('');
  const onChange = event => setGroupName(event.target.value);
  const onKeyPress = ({ key }) => {
    if (key === "Enter") {
      createGroup(newGroupName);
      setGroupName('');
      inputNode.current.blur();
      collapseParent();
    };
  }

  return (
    <div className="group-field-expanded-header">
      <div className="group-field-input-wrapper">
        <input
          type="text"
          className="form-input fill"
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

const GroupEntry = ({ name, id, collapseParent }) => {
  return (
    <NavLink
      to={`/group/${id}/members`}
      className="group-entry-container"
      activeClassName="group-entry-container-active"
      onClick={collapseParent}
    >
      <h3 className="group-name">{name}</h3>
    </NavLink>
  );
};

const SavedGroups = ({ savedGroups, goToGroup, collapseParent }) => (
  <div className="group-entries-container">
    {savedGroups.length ?
      savedGroups.map(
        group => <GroupEntry
          id={group.id}
          name={group.name}
          key={`group-${group.id}`}
          goToGroup={goToGroup}
          collapseParent={collapseParent}
        />
      ) : <em>No Groups Found</em>}
  </div>
);

const IdleDisplayText = ({ selectedGroup }) => (
  <h3 className="group-field-header">
    {selectedGroup ? selectedGroup.name : 'Create New Group'}
  </h3>
);

const GroupField = ({ savedGroups, createGroup, selectedGroup, goToGroup }) => {
  const [isExpanded, toggleExpand] = useState(false);
  const groupFieldNode = useRef();

  const handleClick = e => {
    if (groupFieldNode.current.contains(e.target)) {
      toggleExpand(true);
      return;
    }

    toggleExpand(false);
  };

  const collapseField = () => toggleExpand(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className={`group-field-container ${isExpanded ? 'expanded' : ''} card`}
      ref={groupFieldNode}
    >
      {isExpanded ?
        <>
          <NewGroupNameInput createGroup={createGroup} collapseParent={collapseField} />
          <SavedGroups savedGroups={savedGroups} goToGroup={goToGroup} collapseParent={collapseField} />
        </> :
        <IdleDisplayText selectedGroup={selectedGroup} />}
    </div>
  );
}

export default GroupField;
