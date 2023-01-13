import React from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiUser, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.cart.numberofItems);
  return (
    <div className="grid grid-cols-4 justify-between items-center p-5 bg-[#222222] w-full text-[#e9ddc5] text-lg font-light sticky top-0 z-20">
      <h1 className="text-[#e9ddc5] font-bold text-4xl col-span-2 ml-10">
        <Link to="/">Dhukaan</Link>
      </h1>
      <div className="flex justify-between gap-4 mr-[100px] w-[300px] text-xl">
        <Link to="/" className="hover:scale-110 duration-200">
          Home
        </Link>
        <Link to="/NewArrivals" className="hover:scale-110 duration-200">
          New Arrivals
        </Link>
        <Link to="/journal" className="hover:scale-110 duration-200">
          Journal
        </Link>
      </div>
      <div className="flex text-[30px] justify-center gap-10 w-[200px] ml-10">
        <BiSearch className="hover:scale-110 duration-200" />
        <BiUser className="hover:scale-110 duration-200" />
        <Link to='/cart'>
          <div className="relative flex">
            <BiCart className="hover:scale-110 duration-200" />
            {count > 0 && (
              <div className="bg-red-800 rounded-full absolute text-xs w-[25px] text-center left-5">
                {count}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
