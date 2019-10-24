import React from "react";
import { connect } from "react-redux";
import "./singleCategoryItem.scss";
import { addItemToCart } from "../../redux/actions/cartActions";
import CustomButton from "../custom-button/CustomButton";
function SingleCategoryItem({ item, addItemToCart }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="col-md-3 collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        ADD TO CART{" "}
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SingleCategoryItem);
