import React, { Component } from "react";
import TaskList from "../task-list";
import Header from "../header";
import Footer from "../footer";
import "../../../src/index.css";
import { formatDistanceToNow } from "date-fns";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoTask("eat"),
      this.createTodoTask("drink"),
      this.createTodoTask("sleep"),
    ],
    filter: "all",
  };
  onFilter = (value) => {
    this.setState(() => {
      return {
        filter: value,
      };
    });
  };
  createTodoTask(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      checked: false,
      createTime: new Date(),
      timeAfterEntry: 0,
    };
  }

  timeChange = () => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData];
      for (let i = 0; i < newArray.length; i++) {
        newArray[i].timeAfterEntry = formatDistanceToNow(
          newArray[i].createTime,
        );
      }
      console.log(newArray);
      return {
        todoData: newArray,
      };
    });
  };

  onChecked = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData];
      newArray[idx].checked = true;

      return {
        todoData: newArray,
      };
    });
  };

  onEdit = (id, label) => {
    this.setState(({ todoData }) => {
      let newArray = [...todoData];
      for (let i = 0; i < newArray.length; i++) {
        if (todoData[i].id === id) {
          todoData[i].label = label;
        }
      }

      return {
        todoData: newArray,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };
  render() {
    const { todoData } = this.state;

    const add = (text = "lala") => {
      const newTask = this.createTodoTask(text);
      const newState = [...todoData, newTask];
      this.setState({ todoData: newState });
      this.timeChange(new Date());
    };

    return (
      <div className="todoapp">
        <Header add={add} />
        <TaskList
          onEdit={this.onEdit}
          todoData={todoData}
          deleteItem={this.deleteItem}
          filter={this.state.filter}
          onChecked={this.onChecked}
          timeChange={this.timeChange}
        />
        <Footer onFilter={this.onFilter} />
      </div>
    );
  }
}
