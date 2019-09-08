import React from "react";
import "./check-out-component.scss";
import {
  removeItemFromCart,
  addItemToCart,
  reduceItemFromCartActions
} from "../../redux/actions/cartActions";
import { connect } from "react-redux";

function CheckOutComponent({ item, clearItem, addItem, reduceItem }) {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="imageurl" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => reduceItem(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>

        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10008;
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  reduceItem: item => dispatch(reduceItemFromCartActions(item)),
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutComponent);
