import React, { Component } from "react";
export default class Checkbox extends Component {
  render() {
    return (
      <input
        className="toggle"
        type="checkbox"
        defaultChecked={this.props.checked}
        onClick={() => {
          this.props.onChecked(this.props.id);
        }}
      />
    );
  }
}
