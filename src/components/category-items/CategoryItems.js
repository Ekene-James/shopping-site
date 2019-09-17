import React from "react";
import "./category-items.scss";
import SingleCategoryItem from "./SingleCategoryItem";

function CategoryItems({ data }) {
  const { title, items } = data;

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <SingleCategoryItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CategoryItems;
