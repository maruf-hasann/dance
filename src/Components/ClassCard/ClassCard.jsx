import React from 'react';

const ClassCard = ({ card }) => {
    console.log(card);
    return (
      <div className="card w-96 h-[480px] bg-base-100 shadow-xl mb-6">
        <figure>
          <img
            src={card?.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
                <h2 className="card-title text-2xl">{card?.name}</h2>
                <h2 className="font-semibold text-[18px]">Instructor : {card?.insName}</h2>
                <h2 className="font-semibold text-[16px]">Seats : {card?.seats}</h2>
                <h2 className="font-semibold text-[22px]">Price : $ {card?.price}</h2>
          
          <div className="card-actions justify-start">
            <button className="custom_btn">Select</button>
          </div>
        </div>
      </div>
    );
};

export default ClassCard;