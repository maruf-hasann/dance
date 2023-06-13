import React, { useEffect, useState } from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { data } from 'autoprefixer';
const stripePromise = loadStripe(
  "pk_test_51NI5FcLRwCFm07SK4zdCZImA9BifMajbMwmMi2grZBqv0XE7HrNlx5XPCowk4427mNNDxOBWLou7qMByLLviJAVH00lLVk8ahL"
);
const Payment = () => {
  const { price} = useParams()
 


  const classPrice = Number(price);
  console.log(classPrice);
  return (
    <div>
      <h1>payment</h1>
      <Elements stripe={stripePromise}>
        <Checkout price={classPrice}></Checkout>
      </Elements>
    </div>
  );
};

export default Payment;
