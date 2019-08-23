import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../resources/4.2 crown.svg.svg";
import "./Header.scss";
import { signOut } from "../resources/Firebase";

function Header({ currentUser }) {
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
            <div className="option" onClick={signOut}>
              SIGN-OUT
            </div>
            <p className="option">welcome {currentUser.displayName}</p>
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN-IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
