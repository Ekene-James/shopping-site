import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import DirectoryMenu from "./components/directory-menu/DirectoryMenu";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <DirectoryMenu />
      </div>
    );
  }
}

export default App;
