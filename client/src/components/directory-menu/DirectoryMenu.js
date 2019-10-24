import React, { Component } from "react";
import { connect } from "react-redux";
import Menuitem from "../menu-item/Menu-item";
import "./directory-menu.scss";
import { selectMenuItemData } from "../../redux/utils/dataReselectFunc";

export class DirectoryMenu extends Component {
  render() {
    const { menuData } = this.props;
    return (
      <div className="row directory-menu">
        {menuData.map(({ id, ...otherProps }) => {
          return <Menuitem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
const mapstateToProps = state => ({
  menuData: selectMenuItemData(state)
});

export default connect(mapstateToProps)(DirectoryMenu);
