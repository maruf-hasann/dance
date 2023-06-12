import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";


const ClassCard = ({ card }) => {
 
  const { user } = useAuth();
 
  const location = useLocation()

  const handleSelect = () => {
    if (user) {
      axios
        .post(
          "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/selected",
          {
            name: card?.name,
            studentEmail: user?.email,
            image: card?.image,
            email: card?.email,
            insName: card?.insName,
            seats: card?.seats,
            price: card?.seats,
            status: card?.status,
          }
        )
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Select ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  
 
  

  return (
    <div className="card w-96 h-[480px] bg-base-100 shadow-xl mb-6">
      <figure>
        <img src={card?.image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{card?.name}</h2>
        <h2 className="font-semibold text-[18px]">
          Instructor : {card?.insName}
        </h2>
        <h2 className="font-semibold text-[16px]">Seats : {card?.seats}</h2>
        <h2 className="font-semibold text-[22px]">Price : $ {card?.price}</h2>

        <div className="card-actions justify-start">
          {user? (
            <button  className="custom_btn disabled:bg-gray-200" onClick={handleSelect}>
              <Link>Select</Link>
            </button>
          ) : (
            <button className="custom_btn" onClick={handleSelect}>
                <Link state={{from:location}} to='/login'>Select</Link>
               
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
