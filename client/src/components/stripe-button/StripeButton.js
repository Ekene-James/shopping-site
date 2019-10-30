import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
const StripeButton = ({ price, clearCart }) => {
  //4242*4 exp-01/20 cw-123
  const priceCents = price * 100;
  const publishableKey = "pk_test_5G5JKFqhGQQ9zOPCHXmUCnts00xR8GEsXn";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceCents,
        token
      }
    })
      .then(successMsg => {
        clearCart();
        alert(`stripe success message : ${successMsg}`);
      })
      .catch(err => {
        console.log(err);

        alert("there was issue with your payment");
      });
  };
  return (
    <StripeCheckout
      name="my shopping site" // the pop-in header title
      description={`your total is $${price}`} // the pop-in header subtitle
      panelLabel="pay now"
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
      label="pay now" // text inside the Stripe button
      amount={priceCents}
      stripeKey={publishableKey}
      locale="en"
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.

      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).

      token={onToken} //
    />
  );
};
export default connect(
  null,
  { clearCart }
)(StripeButton);
