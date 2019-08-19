import React from "react";
import "./category-items.scss";
import SingleCategoryItem from "./SingleCategoryItem";

function CategoryItems({ items, title, routeName }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <SingleCategoryItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
}

export default CategoryItems;
