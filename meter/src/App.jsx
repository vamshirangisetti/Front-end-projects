import React from "react";
import Card from "./Components/Card";
import data from "./data";
const App = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-[90%] h-auto mx-auto p-10 grid grid-cols-3 gap-4 text-center">
          {data.map((i) => {
            return (
              <Card
                title={i.title}
                key={i.id}
                id={i.id}
                
                percentage={i.Percentage}
                result={
                  i.Percentage > 90
                    ? "Perfectly Matched"
                    : 40 < i.Percentage && i.Percentage < 90
                    ? "Partially Matched"
                    : "Not Matched"
                }

              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
