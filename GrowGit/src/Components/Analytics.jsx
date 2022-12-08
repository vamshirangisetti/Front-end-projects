import React from 'react'
import Laptop from "../assets/laptop.jpg"
const Analytics = () => {
  return (
    <div className='w-full h-screen bg-white text-black mx-auto flex items-center'>
      <div className='px-4 py-4 grid md:grid-cols-2 max-w-[1240px] mx-auto'>
        <img src={Laptop} alt="img"  className='w-[300px] md:w-[450px] mx-auto' />
        <div className='flex flex-col text-center md:text-start justify-center'>
          <p className='text-[#00d387] text-lg md:text-2xl py-4 font-bold'>Data analytics dashboard</p>
          <h1 className='font-bold text-xl md:text-3xl'>Manage Data Analytics Centrally</h1>
          <p className='py-4 font-bold text-lg md:text-xl text-gray-600'>Dolor ipsum est id adipisicing dolor. Excepteur duis ipsum ad est do laboris fugiat duis. Labore ea ad dolor cillum. Excepteur esse irure eiusmod anim voluptate tempor tempor in velit culpa elit non reprehenderit.</p>
          <button className='rounded-md w-32 h-9 bg-[#00d387] hover:bg-black hover:text-[#00d387] font-bold relative md:top-14 md:left-0 mx-auto md:mx-0'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
