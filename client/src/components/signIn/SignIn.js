import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { signIn, signInwithEmail } from "../../redux/actions/authActions";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.signIn(email, password, this.props.history);
    this.setState({
      email: "",
      password: ""
    });
  };
  signInwithEmail = () => {
    return this.props.signInwithEmail(this.props.history);
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span className="title">sign in with email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            value={email}
            name="email"
            label="Email"
            onChange={this.onChange}
            required
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            label="Password"
            onChange={this.onChange}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign-in</CustomButton>
            <CustomButton onClick={this.signInwithEmail} isGoogleSignIn>
              Email-sign-in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { signIn, signInwithEmail }
)(withRouter(SignIn));
