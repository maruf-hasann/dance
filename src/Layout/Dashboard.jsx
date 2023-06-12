import React from "react";
import { Link, Outlet } from "react-router-dom";

import useInstructor from "../Hooks/useInstructor";
import { AiOutlineHome, AiOutlineFileAdd } from "react-icons/ai";
import { FiUsers} from "react-icons/fi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import useTitle from "../Hooks/useTitle";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {
useTitle('DashBoard')
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor();
 
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-semibold">
          {isAdmin ? (
            <>
              <li>
                <Link to="/">
                  <AiOutlineHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-classes">
                  <MdManageAccounts />
                  Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-users">
                  <FiUsers />
                  Manage Users
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to="/">
                  <AiOutlineHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-classes">
                  <AiOutlineFileAdd />
                  Add a Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-classes">
                  <SiGoogleclassroom />
                  My Classes
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">
                  <AiOutlineHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/selectedClass">My Selected Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/enrollClass">My Enroll Classes</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
