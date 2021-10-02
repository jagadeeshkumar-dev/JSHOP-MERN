import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from 'react-redux'
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ amount }) {

     const dispatch = useDispatch()
  const pbkey =
    "pk_test_51JdaRPSEt6f96bO4RtzcqDmvg3HQhStc9h0mG57zvymRcr1QsDOmk5xGeJ70SjpWihgaLq3fZ0ZlXFXbeF8eRuOD00Uidywkht";

  function tokenHandler(token) {

    dispatch(placeOrder(token,amount))
  }

  function validate(){

    if(!localStorage.getItem('currentUser')){
      window.location.href='/login'
    }
  }

  return (
    <div>
      <StripeCheckout
        token={tokenHandler}
        stripeKey={pbkey}
        amount={amount*100}
        currency="INR"
        shippingAddress
      >
        <div className="text-center">
          <button onClick={validate} className="btn btn-primary ">PAY NOW</button>
        </div>
      </StripeCheckout>
    </div>
  );
}
