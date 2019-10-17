import React from "react";
import "./SignInAndSignUpContainer.scss";
import { connect } from "react-redux";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import Spinner from "../spinner/Spinner";
import {
  selectAuthIsLoading,
  selectAuthErrors
} from "../../redux/utils/authReselectFuncs";
function SignInAndSignUpContainer({ authLoading, authErrors }) {
  if (authLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>

      {authErrors ? <h4 style={{ color: "red" }}>{authErrors}</h4> : null}
    </div>
  );
}
const mapStateToProps = state => ({
  authLoading: selectAuthIsLoading(state),
  authErrors: selectAuthErrors(state)
});

export default connect(mapStateToProps)(SignInAndSignUpContainer);
