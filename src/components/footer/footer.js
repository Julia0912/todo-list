import React from "react";
import TasksFilter from "../tasks-filter";

const Footer = ({ onFilter }) => {
  return (
    <div className="footer">
      <span>1 items left</span>
      <TasksFilter onFilter={onFilter} />
      <button className="clear-completed">Clear completed</button>
    </div>
  );
};
export default Footer;
