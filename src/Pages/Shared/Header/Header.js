import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const Header = () => {
  
  const {user, logOut} = useContext(AuthContext)


const handleLogOut = () => {
  logOut()
  .then()
  .catch();
}

  
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>

      {user?.email ? 
        <>
          <li className="font-semibold">
            <Link to="/orders">Orders</Link>
          </li>

          <li className="font-semibold">
           <button onClick={handleLogOut} className="btn btn-ghost text-gray-50">Sign Out</button>
          </li>
        </>
       : 
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 h-20 mb-12 pt-12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
       
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className="w-16  md:w-20 lg:w-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn p-1 md:p-2 lg:p-3 btn-outline border-brightRed hover:bg-brightRed hover:border-none">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
