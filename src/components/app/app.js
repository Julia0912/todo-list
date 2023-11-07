import React, { Component } from "react";
import TaskList from "../task-list";
import Header from "../header";
import Footer from "../footer";
import "../../../src/index.css";
export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoTask("eat"),
      this.createTodoTask("drink"),
      this.createTodoTask("sleep"),
    ],
  };
  createTodoTask(label) {
    return { label, important: false, id: this.maxId++ };
  }
  render() {
    const { todoData } = this.state;

    const add = (text = "lala") => {
      const newTask = this.createTodoTask(text);
      const newState = [...todoData, newTask];
      this.setState({ todoData: newState });
    };
    return (
      <div className="todoapp">
        <Header add={add} />
        <TaskList todoData={todoData} />
        <Footer />
      </div>
    );
  }
}
