import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

function Menuitem({ title, imageUrl, size, history }) {
  return (
    <div className={`${size ? "col-md-6" : "col-md-4"}`}>
      <div
        className={"menu-item"}
        onClick={() => history.push(`shop/${title}`)}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="content">
          <h1 className="title"> {title.toUpperCase()}</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Menuitem);
