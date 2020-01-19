import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_8Kk8kJC9ZPJCZcHma2tsuNGh00la2xvusz";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="CRWN CLOTHING Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
