import React from 'react'
import { Link } from 'react-router-dom'

const TipsCard = (props) => {
  return (
    <div className='flex flex-col gap-7'>
       <h1 className='text-2xl font-bold text-orange-800'>{props.title}</h1>
       <img src={props.url} alt='image' />
       <p className='font-extralight text-lg'>{props.para}</p>
       <Link to='#' className='font-thin text-lg text-orange-800'>Read more</Link>
    </div>
  )
}

export default TipsCard
