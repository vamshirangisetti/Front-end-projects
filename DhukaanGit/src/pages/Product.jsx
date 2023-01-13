import React from "react";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const title = useSelector((state) => state.product.title);
  const url = useSelector((state) => state.product.url);
  const cost = useSelector((state) => state.product.cost);
  const id = useSelector((state) => state.product.id)
  const location = useLocation();
  const dispatch = useDispatch();
  const HandleClick = ({title, url, cost, id}) => {
    dispatch(addToCart({title, url, cost, id}));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col gap-10 mt-5 text-center">
      <div className="w-[500px] mx-auto flex flex-col gap-5">
        <h1 className="text-3xl text-orange-900 font-semibold">{title}</h1>
        <h4 className="font-extralight">Dhukaan</h4>
        <img src={url} alt="image" className="rounded-xl shadow-2xl"/>
        <h2 className="text-xl font-semibold">${cost}.00</h2>
        <button
          onClick={() => HandleClick({title, url, cost, id})}
          className="w-[250px] mx-auto p-3 rounded-md hover:bg-orange-900 text-white bg-black hover:text-white"
        >
          ADD TO CART
        </button>
      </div>
      <Footer className="w-full" />
    </div>
  );
};

export default Product;
