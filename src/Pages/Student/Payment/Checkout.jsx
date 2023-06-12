import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Checkout = ({ price }) => {
   const {user} = useAuth()
  const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardEroor] = useState("")
     const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/payment-intent", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
    },[price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    //   card
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
      
       if (error) {
           console.log("[error]", error);
           setCardEroor(error.message)
       } else {
           setCardEroor("")
         console.log("[PaymentMethod]", paymentMethod);
      }
      
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "Empty",
            },
          },
        });
         if (confirmError) {
           console.log(confirmError);
         }
      
      
      
      
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[500px] m-8">
        <CardElement
          options={{
            style: {
              base: {
                width: "30px",
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="custom_btn mt-7" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <strong className="text-red-800 ml-9">{cardError}</strong>}
    </>
  );
};

export default Checkout;
