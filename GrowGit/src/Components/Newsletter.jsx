import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 py-5'>
        <div className='lg:col-span-2 text-center lg:flex lg:flex-col lg:justify-center px-4'>
            <h1 className='text-[#00d387] font-bold text-xl md:text-2xl lg:text-3xl lg:text-start pb-1'>Want tips & tricks to optimise your flow?</h1>
            <p className='font-bold text-lg lg:text-2xl lg:text-start'>Sign up to our newsletter & stay upto date.</p>
        </div>
        <div className='text-center lg:text-start mx-auto'>
            <div className='text-center lg:text-start flex flex-col lg:flex-row items-center gap-2 p-3'>
                <input type="email" placeholder="Enter your email" className='rounded-md p-2 text-black w-[50%]' />
                <button className="bg-[#00d387] text-black rounded-md w-32 h-9 font-bold hover:bg-white hover:text-[#00d387] ">Notify me</button>
            </div>
            <p className='font-bold p-3 lg:text-start'>We care about the protection of your data. Read our <span className='text-[#00d387]'><a href="">Privacy policy.</a></span></p>
        </div>
      </div>
    </div>
  )
}     

export default Newsletter
