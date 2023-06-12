import React from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(
  "pk_test_51NI5FcLRwCFm07SK4zdCZImA9BifMajbMwmMi2grZBqv0XE7HrNlx5XPCowk4427mNNDxOBWLou7qMByLLviJAVH00lLVk8ahL"
);
// console.log(stripePromise);

const Payment = () => {
    const  amount  = useParams()
    
    const price = parseFloat(amount.price)
    
    return (
      <div>
        <h2>Payment</h2>
        <Elements stripe={stripePromise}>
          <Checkout price={price}></Checkout>
        </Elements>
        
      </div>
    );
};

export default Payment;