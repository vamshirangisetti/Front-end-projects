import React from 'react'

const Card = (props) => {
  return (
    <div className='mx-auto min-w-[250px] max-w-[300px] border border-gray-100 rounded-lg hover:scale-105 duration-300 shadow-xl'>
      <img src={props.image} alt="img" className='w-[90px] mx-auto mt-[-2.7rem] bg-transparent pb-3' />
      <h2 className='font-bold text-xl pb-3'>{props.users}</h2>
      <h1 className='font-bold text-4xl'>{props.cost}</h1>
      <div className='py-5'>
        <p className='border-b text-md font-semibold pb-1'>{props.line1}</p>
        <p className='border-b text-md font-semibold pb-1'>{props.line2}</p>
        <p className='text-md font-semibold pb-1'>{props.line3}</p>
      </div>
      <button className="bg-[#00d387] text-black rounded-md w-32 h-9 font-bold hover:bg-black hover:text-[#00d387] mb-3 hover:scale-105 duration-300">Start Trial</button>
    </div>
  )
}

export default Card
