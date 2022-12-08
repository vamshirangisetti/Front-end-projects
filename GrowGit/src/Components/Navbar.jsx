import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/Ai";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const HandleNav =()=>{
    setNav(!nav);
  }
  return (
    <div className="text-white justify-between flex items-center mx-auto max-w-[1440px] px-4 h-20">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Grow.</h1>
      <ul className="hidden md:flex">
        <li className="p-3">
          <a href="" className="hover:text-[#00df9a] p-1 font-bold">
            Home
          </a>
        </li>
        <li className="p-3">
          <a href="" className="hover:text-[#00df9a] p-1 font-bold">
            Company
          </a>
        </li>
        <li className="p-3">
          <a href="" className="hover:text-[#00df9a] p-1 font-bold">
            Resources
          </a>
        </li>
        <li className="p-3">
          <a href="" className="hover:text-[#00df9a] p-1 font-bold">
            About
          </a>
        </li>
        <li className="p-3">
          <a href="" className="hover:text-[#00df9a] p-1 font-bold">
            Contact
          </a>
        </li>
      </ul>
      <div className='block md:hidden items-center relative left-2 p-3'>
        {!nav ? <AiOutlineMenu onClick={HandleNav} className="text-[#00df9a] text-[27px]" /> : <AiOutlineClose onClick={HandleNav} className="text-[#00df9a] text-[27px]" />}  
      </div>
      <div className={nav ? "fixed left-1 top-20 w-40 border-r border-gray-900 bg-[#010c09] ease-in-out duration-300 md:hidden" : "fixed left-[-100%] md:hidden"} >
        <ul className="uppercase pl-1">
          <li className="p-3 border-b border-b-gray-900">
            <a href="" className="hover:text-[#00df9a] p-1 font-bold">
              Home
            </a>
          </li>
          <li className="p-3 border-b border-b-gray-900">
            <a href="" className="hover:text-[#00df9a] p-1 font-bold">
              Company
            </a>
          </li>
          <li className="p-3 border-b border-b-gray-900">
            <a href="" className="hover:text-[#00df9a] p-1 font-bold">
              Resources
            </a>
          </li>
          <li className="p-3 border-b border-b-gray-900">
            <a href="" className="hover:text-[#00df9a] p-1 font-bold">
              About
            </a>
          </li>
          <li className="p-3">
            <a href="" className="hover:text-[#00df9a] p-1 font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;