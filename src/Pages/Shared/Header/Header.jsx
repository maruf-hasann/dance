import React from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logoutUser } = useAuth();
 
  const signOut = () => {
    logoutUser()
      .then()
    .catch()
  }
  const navContent = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <header className="navbar bg-base-100 my_container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="text-base menu menu-sm dropdown-content mt-3 p-2 font-semibold shadow bg-base-100 rounded-box w-52"
          >
            {navContent}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-semibold">
          {navContent}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div  className="flex gap-4">
            <img
              src={user?.photoURL}
              width="50px"
              className="rounded-full ring-4 ring-[#b8a2f8]"
            />
            <button onClick={signOut} className="custom_btn">
              Logout
            </button>
          </div>
        ) : (
          <button className="custom_btn">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
