import React from "react";
import "./Homepage.scss";
import DirectoryMenu from "../components/directory-menu/DirectoryMenu";

function Homepage() {
  return (
    <div className="container homepage">
      <DirectoryMenu />
    </div>
  );
}

export default Homepage;
