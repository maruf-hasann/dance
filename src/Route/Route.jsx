import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";

import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/Admin/ManageUsers/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      }, {
        path: 'login',
        element:<Login></Login>
        
      }, {
        path: 'register',
        element:<Register></Register>
      }
    ]
  }, {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'all-users',
        element:<Users/>
      }
    ]
  } ,{
    path: '*',
    element:<Error/>
  }
]);