import React, { useState } from "react";

import "../../styles/member-form.css";

// const ExpandedMemberForm = () => (
//   <div className="member-form card">
//     <div className="member-form-row">
//       <input type="text" className="form-input fill" placeholder="Member Name" />
//     </div>
//     <div className="member-form-row">
//       <input type="number" className="form-input" placeholder="Number" />
//       <input type="email" className="form-input" placeholder="Email Address" />

//       <button className="form-input">
//         Go
//       </button>
//     </div>
//   </div>
// );

const MemberForm = ({ createMember }) => {
  const [newMemberName, setNewMemberName] = useState('');
  const handleChange = event => setNewMemberName(event.target.value);
  const handleSubmit = () => {
    createMember(newMemberName);
    setNewMemberName('');
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
        <button className="form-input" onClick={handleSubmit}>
          Go
        </button>
      </div>
    </div>
  );
}

export default MemberForm;
