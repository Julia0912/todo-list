import React, { Component } from "react";
import Checkbox from "../checked/checkbox";

export default class Task extends Component {
  state = {
    editForm: false,
    label: this.props.label,
  };

  render() {
    const addText = (text) => {
      this.setState({ label: text, editForm: this.state.editForm });
    };
    const edit = () => {
      this.setState({
        editForm: !this.state.editForm,
      });
    };

    return (
      <>
        {!this.state.editForm && (
          <div className="view">
            <Checkbox
              onChecked={this.props.onChecked}
              id={this.props.id}
              checked={this.props.checked}
            />
            <label>
              <span>{this.props.label}</span>
              <span className="created">{this.props.timeAfterEntry}</span>

              <button
                className="icon icon-edit"
                onClick={() => {
                  edit();
                }}
              ></button>
              <button
                className="icon icon-destroy"
                onClick={this.props.deleteItem}
              ></button>
            </label>
          </div>
        )}
        {this.state.editForm && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.onEdit(this.props.id, this.state.label);
              this.setState({ ...this.state, editForm: false });
            }}
          >
            <input
              className="input placeholder new-todo"
              value={this.state.text}
              onChange={(event) => {
                addText(event.target.value);
              }}
            />
          </form>
        )}
      </>
    );
  }
}
// значение у импута и обернуть его в форму
// при onChange запись значения из импута в стейт
// при onSubmit вызов функции онэдит с передачей туда id и state
