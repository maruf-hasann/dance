import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";

import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/Admin/ManageUsers/Users";
import AddClass from "../Pages/Instructors/AddClass/AddClass";
import MyClass from "../Pages/Instructors/MyClass/MyClass";
import ManageClasses from "../Pages/Admin/ManageClasses/ManageClasses";
import InstructorInfo from "../Pages/InsturctorInfo/InstructorInfo";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import SelectedClass from "../Pages/Student/MySelectedClass/SelectedClass";
import EnrollClass from "../Pages/Student/EnrollClass/EnrollClass";
import Payment from "../Pages/Student/Payment/Payment";
import AdminPrivate from "../PrivateRoute/Admin/AdminPrivate";
import PrivateInstructor from '../PrivateRoute/Instructor/PrivateInstructor'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructor",
        element: <InstructorInfo />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-users",
        element: (
          <AdminPrivate>
            <Users />
          </AdminPrivate>
        ),
      },
      {
        path: "add-classes",
        element: <PrivateInstructor>
          <AddClass/>
        </PrivateInstructor>,
      },
      {
        path: "my-classes",
        element: <PrivateInstructor>
          <MyClass/>
        </PrivateInstructor>,
      },
      {
        path: "manage-classes",
        element: (
          <AdminPrivate>
            <ManageClasses></ManageClasses>
          </AdminPrivate>
        ),
      },
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "enrollClass",
        element: <EnrollClass></EnrollClass>,
      },
      {
        path: "payment/:price",
        element: <Payment />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);