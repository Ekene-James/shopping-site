import React from "react";
import { connect } from "react-redux";
import { selectCategories } from "../../redux/categoryReselectFuncs";
import SingleCategoryItem from "../category-items/SingleCategoryItem";
import "./eachCategory.scss";

const EachCategory = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map(item => (
          <SingleCategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectCategories(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(EachCategory);
