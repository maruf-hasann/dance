import React from 'react';
import Lottie from "lottie-react";
import errorImg from '../../assets/42479-page-not-found-404.json'
import { Link } from "react-router-dom";
const Error = () => {
    return (
      <div className="max-w-xl my_container">
        <Lottie animationData={errorImg}></Lottie>
        <button className="custom_btn w-full">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    );
};

export default Error;