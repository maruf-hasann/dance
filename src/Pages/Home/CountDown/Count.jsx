import React from "react";
import CountUp from "react-countup";
import './count.css'
const Count = () => {
  return (
    <div className="my_container">
      <div className="lg:flex gap-5 justify-between text-center">
        <div >
          <h3>
            10K <span>+</span>
          </h3>
          <strong>Sucess Students</strong>
        </div>
        <div>
          <h3>
            <CountUp end={500} duration={100} /> +
          </h3>
          <strong>Live Performance</strong>
        </div>
        <div>
          <h3>
            6 <span>+</span>
          </h3>
          <strong>Years Of Experiences</strong>
        </div>
        <div>
          <h3>
            <CountUp end={50} duration={150} /> +
          </h3>
          <strong>Certified Instructors</strong>
        </div>
      </div>
    </div>
  );
};

export default Count;
