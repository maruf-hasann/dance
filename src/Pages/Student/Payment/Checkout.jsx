import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Swal from 'sweetalert2';
const Checkout = ({ price }) => {
    const { user, } = useAuth();
    
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardEroor] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [paymentId,setPaymentId] = useState('')

    useEffect(() => {
        axios
          .post("https://dance-ten.vercel.app/payment-intent", { price: price })
          .then((res) => {
            setClientSecret(res.data.clientSecret);
          });
    },[price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

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
           setCardEroor(error.message);
         } else {
           setCardEroor("");
          //  console.log("[PaymentMethod]", paymentMethod);
         }
            setProcessing(true);
         const { paymentIntent, error: err } =
           await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
               card: card,
               billing_details: {
                 email: user?.email || "Unknown",
                 name: user?.displayName || "Anonymous Stundet",
               },
             },
           });
         if (err) {
           console.log(err);
        }
      
          setProcessing(false);
       if (paymentIntent.status === "succeeded") {
         setPaymentId(paymentIntent.id);

         const pay = {
           transactionId: paymentIntent.id,
           price,
           date: new Date(),
           email: user?.email
         };

          Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Payment succeeded",
               showConfirmButton: false,
               timer: 1500,
             });
       
         axios.post("https://dance-ten.vercel.app/payment", pay).then((res) => {
           console.log(res);
         });

       
      }
      
        
      
    }

    


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
        {cardError && (
          <strong className="text-red-800 ml-9">{cardError}</strong>
        )}
      </>
    );
};

export default Checkout;
