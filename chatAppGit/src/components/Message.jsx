import React from "react";

const Message = () => {
  return (
    <div>
      <div className="flex items-center gap-5 p-5">
        <div className="flex flex-col">
          <img
            src="https://pbs.twimg.com/profile_images/1518906187210981377/hP6n094s_400x400.jpg"
            alt="image"
            className="w-[40px] rounded-full"
          />
          <p>just now</p>
        </div>
        <div class="h-auto w-auto max-w-xs p-3 overflow-x-hidden overflow-y-hidden rounded-b-xl rounded-r-xl bg-gray-300">
          <p>
            hello
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-5 items-center p-5">
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1518906187210981377/hP6n094s_400x400.jpg"
            alt="image"
            className="w-[40px] rounded-full"
          />
          <p>just now</p>
        </div>
        <div class="h-auto w-auto max-w-xs p-3 overflow-x-hidden overflow-y-hidden rounded-b-xl rounded-l-xl bg-gray-300">
          <p>
            hi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
