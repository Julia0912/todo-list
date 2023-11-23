import React from "react";
import Task from "../task";

const TaskList = ({ todoData, deleteItem, onEdit, filter, onChecked }) => {
  let todoDataCopy = [...todoData];
  if (filter === "Completed") {
    todoDataCopy = todoData.filter((item) => item.checked === true);
  }
  if (filter === "Active") {
    todoDataCopy = todoData.filter((item) => item.checked === false);
  }

  return (
    <ul>
      <label className="todo-list">
        {todoDataCopy.map((item) => {
          const { id, checked, ...itemProps } = item;

          return (
            <li key={item.id}>
              <Task
                label
                {...itemProps}
                deleteItem={() => {
                  deleteItem(id);
                }}
                id={item.id}
                onChecked={onChecked}
                checked={item.checked}
                onEdit={onEdit}
              />
            </li>
          );
        })}
      </label>
    </ul>
  );
};
export default TaskList;
