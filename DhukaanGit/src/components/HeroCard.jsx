import React from 'react'

const HeroCard = (props) => {
  return (
    <div className='relative flex justify-center items-center w-[600px] h-[200px]'>
      <img src={props.url} alt='img' className='absolute object-cover' />
      <h1 className='absolute text-white font-semibold text-3xl'>{props.text}</h1>
    </div>
  )
}

export default HeroCard
