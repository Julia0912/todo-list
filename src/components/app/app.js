import React from "react";
import TaskList from "../task-list";
import Header from "../header";
import Footer from "../footer";
import "../../../src/index.css";
const App = () => {
  const todoData = [
    { label: "eat", important: false, id: 1 },
    { label: "drink", important: false, id: 2 },
    { label: "sleep", important: true, id: 3 },
  ];

  return (
    <div className="todoapp">
      <Header />
      <TaskList todos={todoData} />
      <Footer />
    </div>
  );
};

export default App;
