import React from 'react'
import { Link } from 'react-router-dom'

const JournalCard = (props) => {
  return (
    <div className='flex flex-col gap-5 border-2 border-gray-300 border-b-0 border-r-0 border-l-0 p-5'>
      <p className='font-thin text-xs'>{props.date}</p>
      <h1 className='font-bold text-3xl'>{props.title}</h1>
      <img src={props.url} alt='image' className='w-[900px]'/>
      <p className='font-thin text-lg'>{props.para}</p>
      <Link to='#' className='text-orange-900 font-extralight text-lg'>Read more</Link>
    </div>
  )
}

export default JournalCard
