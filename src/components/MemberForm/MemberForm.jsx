import React, { useState } from "react";

import "../../styles/member-form.css";

const MemberForm = ({ createMember }) => {
  const [newMemberName, setNewMemberName] = useState('');
  const handleChange = event => setNewMemberName(event.target.value);
  const handleSubmit = () => {
    if (newMemberName) {
      createMember(newMemberName);
      setNewMemberName('');
    }
  }
  const handleKeyPress = ({ key }) => key === "Enter" && handleSubmit();

  return (
    <div className="member-form card">
      <div className="member-form-row">
        <div className="member-name-input-wrapper">
          <input
            type="text"
            className="form-input fill"
            placeholder="Member Name"
            value={newMemberName}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          className={`member-form-submit ${newMemberName ? 'can-submit' : ''}`}
          onClick={handleSubmit}
        >
          <i className="material-icons">
            person_add
          </i>
        </button>
      </div>
    </div>
  );
}

export default MemberForm;
