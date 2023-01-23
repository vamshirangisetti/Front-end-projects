import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white flex justify-between items-center px-10 py-5 z-[100] w-full absolute">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[120px]" />
        </Link>
      </div>
      {user?.email ? (
        <div className="flex gap-5">
          <Link to="/account">
            <button className="p-2 text-xl hover:text-red-400">Account</button>
          </Link>

          <button onClick={handleLogout} className="bg-red-600 p-2 rounded-md hover:bg-green-600 text-xl">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link to="/login">
            <button className="p-2 text-xl hover:text-red-400">sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 p-2 rounded-md hover:bg-green-600 text-xl">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
