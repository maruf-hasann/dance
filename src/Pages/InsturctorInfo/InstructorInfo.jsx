import React, { useEffect, useState } from 'react';
import Text from '../../Components/GoogleLogin/HeadingText/Text';
import InfoCard from '../../Components/InstructorInfoCard/InfoCard';
import useTitle from '../../Hooks/useTitle'
const InstructorInfo = () => {
  const [instructor, setInstructor] = useState([]);
  useTitle('Instructor')
 useEffect(() => {
   fetch(
     "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/instructor?role=instructor"
   )
     .then((res) => res.json())
     .then((data) => setInstructor(data));
 }, []);
   console.log(instructor);
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