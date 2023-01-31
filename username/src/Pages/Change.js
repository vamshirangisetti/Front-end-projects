import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const Change = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewusername] = useState("");
  function Hchange(event) {
    setNewusername(event.target.value);
  }

  function Hclick() {
    setUsername(newUsername);
    alert("username changed!");
  }
  return (
    <div className="place">
      <input onChange={Hchange} type="text" placeholder="Enter new name..." />
      <button onClick={Hclick}>Change</button>
    </div>
  );
};

export default Change;
