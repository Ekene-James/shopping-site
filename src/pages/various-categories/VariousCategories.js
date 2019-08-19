import React, { Component } from "react";
import SHOP_DATA from "./Shop-data";
import CategoryItems from "../../components/category-items/CategoryItems";

export class VariousCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CategoryItems key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default VariousCategories;
