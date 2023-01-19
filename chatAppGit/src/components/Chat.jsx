import { Input } from "postcss";
import React from "react";
import ChatNav from "./ChatNav";
import Messages from "./Messages";
import InputChat from "./InputChat";

const Chat = () => {
  return (
    <div className="bg-white w-[72%] h-full">
      <ChatNav />
      <Messages />
      <InputChat />
    </div>
  );
};

export default Chat;
