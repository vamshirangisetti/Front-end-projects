import React from 'react'
import { IoIosAttach } from "react-icons/io";
import { BiImageAdd, BiSend } from "react-icons/bi";

const InputChat = () => {
  return (
    <div className='p-4 mt-[280px] sticky bottom-0 bg-cyan-300 flex justify-between'>
      <input type='text' placeholder='Type here...' className='w-full outline-none bg-transparent placeholder-gray-600'/>
      <div className='flex gap-5'>
        <IoIosAttach className='text-[25px]' />
        <BiImageAdd className='text-[25px]' />
        <button><BiSend className='text-[25px]' /></button>
      </div>
    </div>
  )
}

export default InputChat
