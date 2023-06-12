import React from 'react';

const InstructorCard = ({ card }) => {
    const {image,name} = card
    return (
      <div className="text-center w-[250px] bg-[#edecee] rounded-b-3xl rounded-t-3xl mb-5 shadow-lg ">
        <div>
          <img
            src={image}
            className="rounded-2xl hover:scale-110 duration-300"
            width="250px"
            height="200px"
            alt=""
          />
        </div>
        <h3 className="font-semibold text-xl  my-5">{name}</h3>
        <h2>{card?.student}</h2>
      </div>
    );
};

export default InstructorCard;