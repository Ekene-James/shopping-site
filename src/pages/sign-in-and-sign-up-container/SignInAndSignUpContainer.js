import React from "react";
import "./SignInAndSignUpContainer.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";
function SignInAndSignUpContainer() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpContainer;
