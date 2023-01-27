import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const HandleClick = (e) => {
    const iframe = document.getElementById("output");
    iframe.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";
    iframe.contentWindow.eval(jsCode);  
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-700 h-full w-full flex flex-col justify-between">
        <div className="h-full w-full flex flex-col text-center p-5 gap-2">
          <label className="text-white text-xl font-bold">HTML</label>
          <textarea
            name="html"
            onChange={(e) => {
              setHtmlCode(e.target.value);
            }}
            className="h-full bg-gray-600 outline-none  overflow-visible"
          ></textarea>
        </div>
        <div className="h-full w-full flex flex-col text-center p-5 gap-2">
          <label className="text-white text-xl font-bold">CSS</label>
          <textarea
            name="css"
            onChange={(e) => {
              setCssCode(e.target.value);
            }}
            className="h-full bg-gray-600 outline-none  overflow-visible"
          ></textarea>
        </div>
        <div className="h-full w-full flex flex-col text-center p-5 gap-2">
          <label className="text-white text-xl font-bold">JavaScript</label>
          <textarea
            name="javascript"
            onChange={(e) => {
              setJsCode(e.target.value);
            }}
            className="h-full bg-gray-600 outline-none  overflow-visible"
          ></textarea>
        </div>
      </div>
      <div className="bg-cyan-800 h-full w-full flex flex-col gap-4 items-center">
        <button
          onClick={HandleClick}
          className="bg-green-500 px-3 py-0.5 rounded-md text-white font-semibold w-[80px] mt-5 ml-2 hover:bg-green-600"
        >
          Run
        </button>
        <iframe
          id="output"
          className="border-2 border-gray-900 w-[90%] h-[90%] mx-auto scroll-smooth overflow-visible"
        />
      </div>
    </div>
  );
};

export default App;
