import React from "react";
import NewTaskForm from "../new-task-form /new-task-form";

const Header = ({ add }) => {
  return (
    <div className="header">
      <h1 className="h1">todos</h1>
      <NewTaskForm add={add} />
    </div>
  );
};
export default Header;
