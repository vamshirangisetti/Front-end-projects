import React from "react";
import { Route, Routes } from "react-router-dom";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Phone from "./components/Phone";

const App = () => {
  return (
    <div >
      <div className="sticky top-0">
        <div className="w-full h-10 bg-cyan-500 flex items-center justify-center">
          <h1 className="  text-white font-semibold text-xl text-center">
             OTP app
          </h1>
        </div>
        
      </div>
      <Routes>
        <Route path="/" element={<Phone />} />
        <Route path="/email" element={<Email />} />
      </Routes>
      <Hero />
    </div>
  );
};

export default App;
