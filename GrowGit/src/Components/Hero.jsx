import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="text-center max-w-[800px] flex flex-col w-full h-[640px] mx-auto justify-center items-center">
        <p className="text-[#00d387] md:text-xl font-bold uppercase">
          Grow with Data analytics
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold py-1 md:py-3">Grow with data.</h1>
        <div className="flex text-c font-bold py-1">
          <p className="text-xl">Fast, flexible financing for</p>
          <Typed
            className="pl-2 text-xl"
            strings={["B2B", "SASS", "BTC"]}
            typeSpeed={70}
            backSpeed={70}
            loop
          />
        </div>
        <p className="text-gray-400 font-bold p-3 md:py-4 md:text-xl">
          Moniter your data analytics to increase revenue for B2B, SASS & BTC
          platforms.
        </p>
        <button className="bg-[#00d387] text-black rounded-md w-32 h-9 relative top-9 font-bold hover:bg-white hover:text-[#00d387]">Get started</button>
      </div>
    </div>
  );
};

export default Hero;
