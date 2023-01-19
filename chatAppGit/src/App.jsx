import React, { useState, useRef } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const App = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null)
  if (!isAuth) {
    return (
      <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
        <Register setIsAuth={setIsAuth}/>
      </div>
    );
  }
 else return (
    <div className="h-screen flex justify-center items-center">
      {room ? (
        <Home />
      ) : (
        <div className="w-[400px] h-[400px] mx-auto flex flex-col gap-8 text-center justify-center items-center">
          <label className="text-4xl font-semibold text-cyan-700 p-2 animate-pulse">Enter the room name</label>
          <input placeholder="eg: Kisukku" className="text-2xl w-[300px] h-[50px] border-2 border-cyan-500 rounded-md p-2" type='text' ref={roomInputRef}/> 
          <button className="bg-cyan-500 p-2 rounded-lg w-[120px] hover:bg-black  hover:text-cyan-500 text-xl font-semibold text-gray-800" onClick={()=> setRoom(roomInputRef.current.value)}>Enter Room</button>
        </div>
      )}
    </div>
  );
};

export default App;
