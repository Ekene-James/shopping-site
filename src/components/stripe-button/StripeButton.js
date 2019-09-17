import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceCents = price * 100;
  const publishableKey = "pk_test_5G5JKFqhGQQ9zOPCHXmUCnts00xR8GEsXn";
  const onToken = token => {
    console.log(token);
    alert("payment successful");
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
      billingAddress
      shippingAddress
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.

      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).

      token={onToken} //
    />
  );
};
export default StripeButton;
