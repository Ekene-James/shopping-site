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
      <div className="container-fluid check-out-page">
        <table className="table table-hover ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">#</th>
              <th scope="col">Quantity</th>
              <th scope="col">#</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map(item => (
              <CheckOutComponent key={item.id} item={item} />
            ))}
          </tbody>
        </table>

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
