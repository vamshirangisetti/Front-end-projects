import React from "react";
import { TipsList } from "../assets/TipsList";
import Footer from "../components/Footer";
import JournalCard from "../components/JournalCard";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Journal = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="flex flex-col gap-7">
      <div className="text-center p-5 font-bold text-4xl mt-5">
        <h1>JOURNAL</h1>
      </div>
      <div className="flex flex-col gap-20 w-[900px] mx-auto">
        {TipsList.map((i) => (
          <JournalCard
            key = {i.id}
            date={i.date}
            title={i.title}
            url={i.url}
            para={i.para}
            index={i.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Journal;
