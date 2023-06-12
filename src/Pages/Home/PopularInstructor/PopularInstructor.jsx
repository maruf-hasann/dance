import React, { useEffect, useState } from 'react';
import InstructorCard from '../../../Components/InstructorCard/InstructorCard';
import Text from '../../../Components/GoogleLogin/HeadingText/Text';

const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch(
          "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/instructor?role=instructor"
        )
          .then((res) => res.json())
          .then((data) => setInstructor(data));
    }, [])
    // console.log(instructor);
    
    // console.log(filterInstructor);
    return (
        <div className="my_container">
            <Text text='Popular Instructor'></Text>
        <div className='lg:grid lg:grid-cols-3 '>
          {instructor.map((i) => (
            <InstructorCard key={i._id} card={i}></InstructorCard>
          ))}
        </div>
      </div>
    );
};

export default PopularInstructor;