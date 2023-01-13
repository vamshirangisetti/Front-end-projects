import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-[1340px] mx-auto border-2 border-t-gray-300 border-r-0 border-l-0 border-b-0 py-10">
      <div className="flex gap-32">
        <div className="flex flex-col gap-4">
          <p>Navigate</p>
          <Link to='/'>Home</Link>
          <Link to='/NewArrivals'>New Arrivals</Link>
          <Link>Journal</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p>SUPPORT</p>
          <Link>Contact</Link>
          <Link>Delivery</Link>
          <Link>Returns</Link>
          <Link>Security</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>ABOUT THE CONTENT</p>
        <p>
          This is a demo store! Massive thanks to the fine folks over at S.E.H
          Kelly for allowing us to use their wonderful content here. Head over
          to their site to shop these pieces for real.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p>NEWSLETTER</p>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="border-2 border-orange-900 rounded-md p-1.5 w-[200px]"
          />
          <button className="bg-orange-900 rounded-md p-2 text-white hover:bg-black">subscribe</button>
        </div>
        <div className="flex gap-4 text-[25px]">
          <BsFacebook className="hover:text-orange-900"/>
          <BsInstagram className="hover:text-orange-900"/>
          <BsPinterest className="hover:text-orange-900"/>
          <BsTwitter className="hover:text-orange-900"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
