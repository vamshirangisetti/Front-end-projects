import React from "react";
import { useDispatch } from 'react-redux';
import { remove } from '../slices/cartSlice'


const CartCard = (props) => {
  const dispatch = useDispatch()

  const HandleClick = (props)=>{
    dispatch(remove(props))
  }

  return (
    <div className="flex p-10 gap-5 justify-start w-[1240px] mx-auto">
      <div className="flex gap-10 items-center">
        <button className="bg-gray-300 w-6 h-6 rounded-md hover:bg-black hover:text-white" onClick={()=>HandleClick(props)}>
          X
        </button>
        <img src={props.url} alt="image" className="w-[150px]" />
        <div className="flex flex-col gap-2">
          <p className="font-extralight text-sm">Dhukaan</p>
          <h1 className="text-lg font-semibold">{props.title}</h1>
        </div>
      </div>
      <div
        className="flex items-center w-[600px] justify-center
      "
      >
        <h1>${props.cost}.00</h1>
      </div>
    </div>
  );
};

export default CartCard;
