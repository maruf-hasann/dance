import React, { Children } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';


const AdminPrivate = ({ children }) => {
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin();
    
    if (isAdminLoading) {
      return <progress className="progress w-56"></progress>;
    }
    if (isAdmin) {
        return children
    }

    return  <Navigate state={{from:location}}  to='/login' replace></Navigate>
};

export default AdminPrivate;