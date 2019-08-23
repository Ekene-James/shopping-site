import React from "react";
import "./formInput.scss";

function FormInput({ label, onChange, ...otherprops }) {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherprops} />

      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
