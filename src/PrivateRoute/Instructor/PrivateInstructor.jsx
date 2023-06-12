import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useInstructor from '../../Hooks/useInstructor';

const PrivateInstructor = ({children}) => {
   const location = useLocation();
   const [isInstructor, isInstructorLoading] = useInstructor()

   if (isInstructorLoading) {
     return <progress className="progress w-56"></progress>;
   }
   if (isInstructor) {
     return children;
   }

   return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateInstructor;