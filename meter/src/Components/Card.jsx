import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-[300px] min-h-[300px] border-2 border-gray-400 flex flex-col gap-2">
      <div className="flex justify-between p-2">
        <h1 className="border-2 border-cyan-500 rounded-full text-sm w-6 text-center">
          {props.id}
        </h1>
        <h1 className="font-bold text-lg">{props.title}</h1>
        <button className="flex items-center gap-1 text-sm border-2 border-black bg-gray-300">
          <h1>Weight :</h1>
          <div className="flex p-1">
            <h1>10</h1>
            <h3 className="text-xs">{8-props.id}</h3>
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src="src\assets\meter.png"
          alt="img"
          className="w-[100px] mx-auto"
        />
        <h1>{props.percentage}%</h1>
        <h1 className={(props.result == 'Perfectly Matched') ? "font-semibold text-yellow-500" : (props.result == 'Partially Matched') ? "font-semibold text-cyan-500" : "font-semibold text-red-500" }>{props.result}</h1>
      </div>
      <div className="max-w-[120px] min-h-[100px] bg-gray-300 border-2 border-black mx-auto flex flex-col gap-2">
      <h1 className="font-semibold text-sm p-1">Matching Score</h1>
      <div className="flex flex-col gap-2">
         
      </div>
    </div>
    </div>
  );
};

export default Card;
