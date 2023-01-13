import React from "react";
import { ArrivalList } from "../assets/ArrivalsList";
import Footer from "../components/Footer";
import Card from "../components/ProductCard";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NewArrivals = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col gap-16">
      <div className="relative w-[1440px] h-screen mx-auto flex justify-center items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0691/4749/collections/shirt-standard-collar-navy-corduroy-worn-10_1805x677.jpg?v=1560356699"
          className="absolute object-cover"
        />
        <h1 className="relative text-white font-bold text-6xl">NEW ARRIVALS</h1>
      </div>

      <div className="w-[1340px] mx-auto grid grid-cols-3 gap-12">
        {ArrivalList.map((i) => (
          <Card key={i.id} url={i.url} title={i.title} cost={i.cost} index={i.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NewArrivals;
