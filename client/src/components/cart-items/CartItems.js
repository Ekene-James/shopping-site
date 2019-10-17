import React from "react";
import "./CartItems.scss";

function CartItems({ items: { imageUrl, price, quantity, name } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
