import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/navigation.css";

const NavButton = ({ to, children }) => (
  <NavLink
    className="nav-button"
    activeClassName="nav-active"
    to={to}
  >
    {children}
  </NavLink>
)

const Navigation = ({ context }) => (
  <div className="nav-container">
    <NavButton to={`${context}/members`}>Members</NavButton>
    <NavButton to={`${context}/expenses`}>Expenses</NavButton>
    <NavButton to={`${context}/split`}>Split</NavButton>
  </div>
);

export default Navigation;
