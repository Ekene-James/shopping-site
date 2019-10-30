import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../redux/actions/authActions";
import { ReactComponent as Logo } from "../resources/4.2 crown.svg.svg";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectHidden } from "../../redux/utils/cartReselectFuncs";
import { selectCurrentUser } from "../../redux/utils/authReselectFuncs";

export class Header extends Component {
  signOut = () => {
    this.props.signOut(this.props.history);
  };
  render() {
    const { currentUser, cart } = this.props;

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>

        {cart ? null : <CartDropdown className="navbar-brand" />}
        {currentUser ? (
          <span className="option">welcome {currentUser.displayName}</span>
        ) : null}

        <CartIcon className="navbar-brand" />

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <Link to="/shop" className="nav-item nav-link">
              SHOP
            </Link>

            {currentUser ? (
              <div className="nav-item nav-link" onClick={this.signOut}>
                SIGN-OUT
              </div>
            ) : (
              <Link className="nav-item nav-link" to="/signIn">
                SIGN-IN
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  cart: selectHidden(state)
});
export default connect(
  mapStateToProps,
  { signOut }
)(withRouter(Header));
