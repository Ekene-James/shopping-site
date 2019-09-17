import React, { Component } from "react";
import {
  selectCartItems,
  selectTotal
} from "../../redux/utils/cartReselectFuncs";
import { connect } from "react-redux";
import "./check-out.scss";
import CheckOutComponent from "../../components/check-out/CheckOut.component";
import StripeButton from "../../components/stripe-button/StripeButton";

export class CheckOut extends Component {
  render() {
    const { cartItem, total } = this.props;

    return (
      <div className="check-out-page">
        <div className="check-out-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItem.map(item => (
          <CheckOutComponent key={item.id} item={item} />
        ))}

        <div className="total">
          <span>Total : $ {total}</span>
        </div>
        <StripeButton price={total} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: selectTotal(state),
  cartItem: selectCartItems(state)
});

export default connect(mapStateToProps)(CheckOut);
