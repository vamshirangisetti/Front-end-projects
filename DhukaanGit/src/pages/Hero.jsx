import React from "react";
import About from "../components/About";
import CFavourites from "../components/CFavourites";
import HeroCard from "../components/HeroCard";
import TipsCard from "../components/TipsCard";
import { TipsList } from "../assets/TipsList";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full h-screen relative flex flex-col justify-center items-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0691/4749/files/video_2c4174c9-ec6d-4925-be38-5bee4b270360_1555x778.jpg?v=1613538898"
          alt="image"
          className="absolute object-cover"
        />
        <h1 className="text-white absolute text-5xl font-bold w-[1240px]">
          GARMENTS THAT STAND THE TEST OF TIME BY DESIGN, BY QUALITY, AND BY
          VALUE.
        </h1>
      </div>
      <div className="flex justify-between items-center gap-20 w-[1340px] h-[400px] mx-auto border-2 border-gray-300 border-t-0 border-l-0 border-r-0">
        <Link to='/trousers'>
          <HeroCard
            url="https://cdn.shopify.com/s/files/1/0691/4749/files/trousers_9f110faa-4501-42f7-be99-322f7f5b0a09_864x432.jpg?v=1613538901"
            text="TROUSERS"
          />
        </Link>
        <Link to='/jackets'>
          <HeroCard
            url="https://cdn.shopify.com/s/files/1/0691/4749/files/jackets_13f03ea4-e106-4726-b875-609df24cdf47_864x432.jpg?v=1613538901"
            text="JACKETS"
          />
        </Link>
      </div>
      <CFavourites />
      <About />
      <div className="w-[1340px] h-screen mx-auto">
        <div className="flex relative justify-center items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0691/4749/files/mill_87a06a5a-6570-43c5-946f-02db0a85aa51_1708x854.jpg?v=1613538904"
            alt="image"
          />
          <h1 className="absolute text-white font-bold text-6xl">
            QUALITY CRAFTSMANSHIP
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 w-[1340px] mx-auto gap-10">
        {TipsList.map((i) => (
          <TipsCard key={i.id} title={i.title} url={i.url} para={i.para} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
