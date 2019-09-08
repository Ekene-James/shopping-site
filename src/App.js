import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/Homepage";

import VariousCategories from "./pages/various-categories/VariousCategories";
import Header from "./components/header/Header";
import SignInAndSignUpContainer from "./pages/sign-in-and-sign-up-container/SignInAndSignUpContainer";

import { getCurrentUser } from "./redux/actions/authActions";
import CheckOut from "./pages/check-out/CheckOut";

export class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={VariousCategories} />
            <Route
              exact
              path="/signIn"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpContainer />
              }
            />
            <Route exact path="/check-out" component={CheckOut} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(App);
