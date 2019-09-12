import React from "react";
import { connect } from "react-redux";
import "./various-categories.scss";

import { selectShopdata } from "../../redux/utils/dataReselectFunc";
import CategoryItems from "../../components/category-items/CategoryItems";

const VariousCategories = ({ data }) => {
  const arrObj = Object.keys(data).map(i => data[i]);

  return (
    <div className="shop-page">
      {arrObj.map(data => (
        <CategoryItems key={data.id} data={data} />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  data: selectShopdata(state)
});

export default connect(mapStateToProps)(VariousCategories);
