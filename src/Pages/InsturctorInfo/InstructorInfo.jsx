import React, { useEffect, useState } from 'react';
import Text from '../../Components/GoogleLogin/HeadingText/Text';
import InfoCard from '../../Components/InstructorInfoCard/InfoCard';

const InstructorInfo = () => {
 const [instructor, setInstructor] = useState([]);
 useEffect(() => {
   fetch("http://localhost:5000/instructor?role=instructor")
     .then((res) => res.json())
     .then((data) => setInstructor(data));
 }, []);
   
    return (
      <div className='my_container'>
        <Text text="Instructor"></Text>
        <div className='lg:grid lg:grid-cols-3'>
          {instructor.map((i) => (
            <InfoCard key={i._id} card={i} />
          ))}
        </div>
      </div>
    );
};

export default InstructorInfo;