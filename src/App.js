import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hats from "./pages/Hats";
import VariousCategories from "./pages/various-categories/VariousCategories";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={VariousCategories} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
