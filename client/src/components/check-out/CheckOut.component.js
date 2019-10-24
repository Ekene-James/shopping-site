import React from "react";

import {
  removeItemFromCart,
  addItemToCart,
  reduceItemFromCartActions
} from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import "./check-out-component.scss";

function CheckOutComponent({ item, clearItem, addItem, reduceItem }) {
  const { name, imageUrl, quantity, price } = item;
  return (
    <tr className="tr">
      <td>
        <img src={imageUrl} alt="imageurl" />
      </td>
      <td>{name}</td>
      <td className="clickable" onClick={() => reduceItem(item)}>
        &#10094;
      </td>
      <td>{quantity}</td>
      <td className="clickable" onClick={() => addItem(item)}>
        &#10095;
      </td>
      <td>{price}</td>
      <td className="clickable" onClick={() => clearItem(item)}>
        &#10008;
      </td>
    </tr>
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
