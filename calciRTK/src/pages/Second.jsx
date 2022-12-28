import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Second = () => {
  const count = useSelector((state)=> state.updown.value)
  return (
    <div className='w-full h-screen mx-auto flex flex-col items-center justify-center bg-gray-400 gap-5'>
      <h1>The result is: {count}</h1>
      <Link to='/'><button className='bg-green-500 p-2 rounded-lg text-white'>Go back</button></Link>
    </div>
  )
}

export default Second
