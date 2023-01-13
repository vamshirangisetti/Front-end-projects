import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { productClick } from "../slices/ProductSlice";

const Card = ({index, url, title, cost}) => {
  const dispatch = useDispatch();
  const HandleProduct = ({index, url, title, cost}) => {
    dispatch(productClick({index, url, title, cost}));
  };

  return (
    <div
      className="h-[300px] w-[430px] text-center relative shadow-xl rounded-xl"
      onClick={() => HandleProduct({index, url, title, cost})}
    >
      <Link to="/product">
        <img
          src={url}
          alt="image"
          className="absolute h-full w-full rounded-xl"
        />
        <div className="opacity-0 hover:opacity-100 flex absolute bottom-0 left-0 w-full h-full items-center justify-center rounded-xl">
          <div className="absolute object-fit object-center h-full w-full bg-black opacity-40 rounded-xl" />
          <div className="z-10 text-white flex flex-col gap-7">
            <p className="font-extralight">Dhukaan</p>
            <h2 className="text-white text-xl font-bold uppercase">
              {title}
            </h2>
            <p className="font-thin">${cost}.00</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
