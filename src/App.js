import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Hats from "./pages/Hats";
import VariousCategories from "./pages/various-categories/VariousCategories";
import Header from "./components/header/Header";
import SignInAndSignUpContainer from "./pages/sign-in-and-sign-up-container/SignInAndSignUpContainer";
import { auth, firestore } from "./components/resources/Firebase";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        firestore
          .collection("users")
          .doc(user.id)
          .get()
          .then(doc => {
            if (!doc.exists) {
              console.log("No such document!");
            } else {
              const id = doc.id;
              const userData = doc.data();
              this.setState({
                currentUser: {
                  id,
                  ...userData
                }
              });

              console.log("Document data:", doc.data());
            }
          })
          .catch(err => {
            console.log("Error getting document", err);
          });

        // ...
      } else {
        // User is signed out.
        // ...
        this.setState({
          currentUser: null
        });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={VariousCategories} />
            <Route path="/signIn" component={SignInAndSignUpContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
