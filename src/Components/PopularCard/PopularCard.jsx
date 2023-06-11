import React from 'react';

const PopularCard = ({ card }) => {
    const { image,name } = card;
    return (
      <div className="card w-96 h-[550px] glass mb-8 group">
        <figure>
          <img
            src={image}
                    alt="car!"
                    className='hover:scale-125 duration-500'
          />
        </figure>
        <div className="card-body">
                <h2 className="text-center font-semibold text-3xl">{name}</h2>
        
          
        </div>
      </div>
    );
};

export default PopularCard;