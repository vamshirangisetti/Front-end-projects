import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-[100px] w-full bg-indigo-500 flex items-center justify-center">
      <div className="flex gap-20 text-white text-xl">
        <Link to="/email">
          <button className="bg-indigo-600 p-3 rounded-xl hover:bg-black">Try with Email</button>
        </Link>
        <Link to="/">
          <button className="bg-indigo-600 p-3 rounded-xl hover:bg-black">Try with Phone</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
