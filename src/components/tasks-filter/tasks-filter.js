import React from "react";

const TasksFilter = ({ onFilter }) => {
  return (
    <div>
      <ul className="filters">
        <li>
          <button
            className="selected"
            onClick={() => {
              onFilter("All");
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onFilter("Active");
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onFilter("Completed");
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TasksFilter;
