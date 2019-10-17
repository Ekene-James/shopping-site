import React, { Component } from "react";
import spinner from "./spinner.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt="loading..."
          style={{ width: "200px", display: "block", margin: "auto" }}
        />
      </div>
    );
  }
}

export default Spinner;
