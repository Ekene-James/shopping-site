import React from "react";
import "./customButton.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherprops }) {
  return (
    <button
      className={`custom-button ${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      }`}
      {...otherprops}
    >
      {children}
    </button>
  );
}

export default CustomButton;
