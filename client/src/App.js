import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/Homepage";

import Header from "./components/header/Header";

import { getCurrentUser } from "./redux/actions/authActions";

import { selectCurrentUser } from "./redux/utils/authReselectFuncs";
import Spinner from "./pages/spinner/Spinner";
import ErrorBoundary from "./pages/ErrorBoundary";

const VariousCategories = lazy(() =>
  import("./pages/various-categories/VariousCategories")
);
const SignInAndSignUpContainer = lazy(() =>
  import("./pages/sign-in-and-sign-up-container/SignInAndSignUpContainer")
);
const EachCategory = lazy(() =>
  import("./components/eachCategory/EachCategory")
);
const CheckOut = lazy(() => import("./pages/check-out/CheckOut"));
export class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;

    getCurrentUser();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/shop" component={VariousCategories} />
                <Route path="/shop/:category" component={EachCategory} />
                <Route
                  exact
                  path="/signIn"
                  render={() =>
                    currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInAndSignUpContainer />
                    )
                  }
                />
                <Route exact path="/check-out" component={CheckOut} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(App);
