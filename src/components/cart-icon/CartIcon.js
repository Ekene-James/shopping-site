import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "./11.2 shopping-bag.svg.svg";
import "./cart-icon.scss";
import { toggleCartItem } from "../../redux/actions/cartActions";
import { selectQuantity } from "../../redux/utils/cartReselectFuncs";

class CartIcon extends Component {
  onClick = () => {
    this.props.toggleCartItem();
  };
  render() {
    return (
      <div className="cart-icon">
        <ShoppingBag className="shopping-icon" onClick={this.onClick} />

        <span className="item-count">{this.props.itemCount}</span>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  itemCount: selectQuantity(state)
});
export default connect(
  mapStateToProps,
  { toggleCartItem }
)(CartIcon);
