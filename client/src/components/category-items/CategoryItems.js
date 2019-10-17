import React from "react";
import "./category-items.scss";
import SingleCategoryItem from "./SingleCategoryItem";
import { Link } from "react-router-dom";

function CategoryItems({ data }) {
  const { title, items } = data;

  return (
    <div className="collection-preview">
      <Link className="title" to={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
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
