import React from 'react';
import man from '../../assets/rm328-366-tong-08_1.jpg'
const InfoCard = ({ card }) => {
    
    return (
      
        <div className="card card-compact w-96 bg-base-100 shadow-md mb-6">
          <figure>
            <img
              src={card?.image || man }
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
                <h2 className="card-title">Name: {card?.name}</h2>
                <h2 className="font-semibold">Email: {card?.email}</h2>
          </div>
        </div>
    
    );
};

export default InfoCard;