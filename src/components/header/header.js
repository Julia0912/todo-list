import React, { Component } from "react";
export default class Header extends Component {
  state = {
    text: "",
  };

  render() {
    const addText = (text) => {
      this.setState({ text: text });
    };
    return (
      <div className="header">
        <h1 className="h1">todos</h1>
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
      </div>
    );
  }
}
