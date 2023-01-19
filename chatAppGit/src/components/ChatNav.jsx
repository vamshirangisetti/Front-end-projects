import React from 'react'
import { MdVideoCall, MdMoreHoriz  } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";

const ChatNav = () => {
  return (
    <div className='flex justify-between p-4 bg-cyan-300 sticky top-0'>
      <h1 className='text-xl font-semibold text-gray-500'>Vamshi</h1>
      <div className='flex gap-3'>
        <MdVideoCall className='text-[30px]' />
        <BiUserPlus className='text-[30px]' />
        <MdMoreHoriz className='text-[30px]' />
      </div>
    </div>
  )
}

export default ChatNav
