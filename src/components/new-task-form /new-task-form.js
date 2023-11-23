import React, { Component } from "react";
export default class NewTaskForm extends Component {
  state = {
    text: "",
  };

  render() {
    const addText = (text) => {
      this.setState({ text: text });
    };
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.add(this.state.text);
          addText("");
        }}
      >
        <input
          value={this.state.text}
          onChange={(event) => {
            addText(event.target.value);
          }}
          type="text"
          className="input placeholder new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}
