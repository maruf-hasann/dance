import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateStudent = ({ children }) => {
    const { user, loader } = useAuth()
    const location = useLocation()
    if (loader) {
        return <progress className="progress w-56"></progress>;
    }
    if (user) {
        return children
    }
    return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default PrivateStudent;