import React from "react";
import Task from "../task";

const TaskList = ({ todoData }) => {
  return (
    <ul>
      <label className="todo-list">
        {todoData.map((item) => {
          const { id, ...itemProps } = item;
          return (
            <li key={item.id}>
              <Task label {...itemProps} />
            </li>
          );
        })}
      </label>
    </ul>
  );
};
export default TaskList;
