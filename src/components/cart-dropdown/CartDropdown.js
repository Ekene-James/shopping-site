import React, { Component } from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartItem } from "../../redux/actions/cartActions";

import CartItems from "../cart-items/CartItems";
import { selectCartItems } from "../../redux/utils/cartReselectFuncs";

export class CartDropdown extends Component {
  render() {
    const { cartItem, history, toggleCartItem } = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItem.length ? (
            cartItem.map(items => <CartItems key={items.id} items={items} />)
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/check-out");
            toggleCartItem();
          }}
        >
          GO TO CHECK OUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItem: selectCartItems(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartItem }
  )(CartDropdown)
);
