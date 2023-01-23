import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <div>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="image"
          className="h-[550px] w-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] mx-auto mt-40 text-center">
          <div className="top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My shows</h1>
            <SavedShows />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
