import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../redux/actions/authActions";
import { ReactComponent as Logo } from "../resources/4.2 crown.svg.svg";
import "./Header.scss";
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
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/contacts" className="option">
            CONTACTS
          </Link>
          {currentUser ? (
            <div>
              <div className="option" onClick={this.signOut}>
                SIGN-OUT
              </div>
              <p className="option">welcome {currentUser.displayName}</p>
            </div>
          ) : (
            <Link className="option" to="/signIn">
              SIGN-IN
            </Link>
          )}

          <CartIcon />
        </div>
        {cart ? null : <CartDropdown />}
      </div>
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
