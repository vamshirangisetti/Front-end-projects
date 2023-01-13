import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Footer from "../components/Footer";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartItems);
  const subtotal = useSelector((state) => state.cart.subtotal);
  return (
    <div className="flex flex-col justify-center text-center mt-5 gap-10">
      <h1 className="text-4xl font-bold">CART</h1>
      <div>
        {cartList.map((i) => (
          <CartCard key={i.id} url={i.url} title={i.title} cost={i.cost} index={i.id} />
        ))}
      </div>
      <div className="flex justify-between w-[700px] mx-auto p-2">
        <h1 className="text-3xl font-semibold">SUBTOTAL : ${subtotal}.00</h1>
        <button className="hover:bg-orange-900 w-[150px] text-white rounded-lg text-lg p-2.5 bg-green-500 font-semibold uppercase">buy now</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
