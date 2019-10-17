import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./signUp.scss";
import { signUp } from "../../redux/actions/authActions";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      password2: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    const { email, displayName, password, password2 } = this.state;
    if (password !== password2) {
      alert("passwords dont match");
      return;
    }
    this.props.signUp(email, password, displayName, this.props.history);
    this.setState({
      email: "",
      displayName: "",
      password: "",
      password2: ""
    });
  };

  onChange = e => {
    return this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, displayName, password, password2 } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I dont have an account</h1>
        <span className="title">sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            value={email}
            name="email"
            label="Email"
            onChange={this.onChange}
            required
          />
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            label="Display Name"
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
          <FormInput
            type="password"
            value={password2}
            name="password2"
            label="confirm Password"
            onChange={this.onChange}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign-Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { signUp }
)(withRouter(SignUp));
