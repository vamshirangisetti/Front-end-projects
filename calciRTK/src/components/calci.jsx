import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updownSlice, take, reset } from "../slices/updown";

const Calci = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.updown.value);
  const [amount, setAmount] = useState(0);
  const addAmount = Number(amount)
  
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center justify-center bg-gray-400 gap-5">
      <h1 className="text-4xl">{count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-yellow-400 w-8 font-bold text-3xl"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <input
          type="text"
          className="border-2 p-2 w-20 border-black text-center"
          onChange={(event)=>{setAmount(event.target.value)}}
        />
        <button
          className="bg-yellow-400 w-8 font-bold text-2xl"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex gap-5">
        <button className="bg-green-500 p-2 rounded-lg text-white" onClick={()=>dispatch(take(addAmount))}>
          Add
        </button>
        <button className="bg-green-500 p-2 rounded-lg text-white" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <Link to="/second">
        <button className="bg-green-500 p-2 rounded-lg text-white">
          Next page
        </button>
      </Link>
    </div>
  );
};

export default Calci;
