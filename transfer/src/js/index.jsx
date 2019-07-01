import React from "react";
import ReactDOM from "react-dom";

import "../styles/styles.css";
import "../styles/gradient-bg.css";

import Greeter from "./segments/Greeter";
import GroupField from "./segments/GroupField";
// import ToggleNav from "./segments/ToggleNav";
// import ExpenseView from "./segments/ExpensesView";
// import SearchSortWidget from "./components/SearchSortWidget";
// import MemberWidget from "./components/MemberWidget";
// import MembersView from "./segments/MembersView";
// import SplitView from "./segments/SplitView";

const App = () => (
  <div className="content">
    <Greeter />
    <GroupField />
    {/* <ToggleNav /> */}
    {/* <SearchSortWidget /> */}
    {/* <MemberWidget /> */}
    {/* <ExpenseView /> */}
    {/* <MembersView /> */}
    {/* <SplitView /> */}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
