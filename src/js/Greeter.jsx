import React from "react";

import logo from "../assets/sample-logo.png";
import "../styles/greeter-styles.css";

const GreeterItem = ({ children }) => (
  <div className="greeter-item">{children}</div>
);

const Greeter = () => (
  <div className="temp">
    <div className="greeter-wrapper">
      <button className="greeter-shift">
        <i className="fas fa-chevron-left" />
      </button>
      <div className="greeter-items-container">
        <GreeterItem>
          <img src={logo} alt="" />
        </GreeterItem>
      </div>
      <button className="greeter-shift">
        <i class="fas fa-chevron-right" />
      </button>
    </div>
  </div>
);

export default Greeter;
