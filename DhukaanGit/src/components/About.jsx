import React from "react";

const About = () => {
  return (
    <div className="w-[1280px] mx-auto grid grid-cols-2 grid-rows-2 gap-20 mt-16">
      <div className="w-[600px] h-[300px]">
        <div className="flex flex-col gap-10 mt-10">
          <h1 className="font-bold text-2xl">MADE IN THE WORKSHOP</h1>
          <p className="text-lg font-medium">
            Shirts and jackets and trousers are cut and sewn in workrooms which
            do so only for shirts or jackets or trousers. Knitwear is
            hand-framed in one or another far-flung corner of an island. Cloth —
            often hand-woven — comes from mills very much above, if you will,
            the run of most mills. Buckles and toggles and so on are made by old
            hands in old establishments.
          </p>
        </div>
      </div>
      <div className="relative w-[600px] h-[300px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0691/4749/files/iwt2_857x447.jpg?v=1613538904"
          alt="image"
          className="absolute object-cover"
        />
      </div>
      <div className="relative w-[600px] h-[300px]">
        <img
          src="https://cdn.shopify.com/s/files/1/0691/4749/files/iwt1_857x446.jpg?v=1613538904"
          alt="image"
          className="absolute object-cover"
        />
      </div>
      <div className="w-[600px] h-[300px]">
        <div className="flex flex-col gap-10 mt-10">
          <h1 className="font-bold text-2xl">VENTILE CANVAS</h1>
          <p className="text-lg font-medium">
            Made by the water-haters at Ventile as a luggage-weight variety of
            their classic weather-proof cotton, and honed again and again until
            deemed fit to bear the company hallmark. Equivalent in heft to 15oz
            canvas and woven with the same top percentile of extra-long-staple
            cotton fibres with which the Ventile name has, since the 1940s, been
            built.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
