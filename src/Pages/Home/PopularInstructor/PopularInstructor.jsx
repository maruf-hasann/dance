import React, { useEffect, useState } from 'react';
import InstructorCard from '../../../Components/InstructorCard/InstructorCard';
import Text from '../../../Components/GoogleLogin/HeadingText/Text';
import { JackInTheBox } from "react-awesome-reveal";
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
        <Text text="Popular Instructor"></Text>
        <JackInTheBox >
          {" "}
          <div className="lg:grid lg:grid-cols-3 ">
            {instructor.slice(6, 13).map((i) => (
              <InstructorCard key={i._id} card={i}></InstructorCard>
            ))}
          </div>
        </JackInTheBox>
      </div>
    );
};

export default PopularInstructor;