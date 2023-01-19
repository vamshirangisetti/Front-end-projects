import React from 'react'

const HomeCard = () => {
  return (
    <div className='flex gap-3 w-full h-[60px] p-2'>
      <img src='https://pbs.twimg.com/profile_images/1518906187210981377/hP6n094s_400x400.jpg' alt='image' className='rounded-full'/>
      <div className='flex flex-col'>
        <h1 className='text-gray-700 text-lg'><i>Me</i></h1>
        <p className='text-sm font-light'>hello....</p>
      </div>
    </div>
  )
}

export default HomeCard
