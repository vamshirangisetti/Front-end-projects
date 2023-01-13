import React from 'react'
import { Favorites } from '../assets/FavouriteImg'
import ProductCard from './ProductCard'

const CFavourites = () => {
  return (
    <div className='h-screen text-center mx-auto flex flex-col gap-10 text-white font-semibold text-2xl'>
      <h1 className='text-black'>CUSTOMER FAVORITES</h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-10 h-screen'>
        {Favorites.map(i=><ProductCard key={i.id} url={i.url} title={i.title} cost={i.cost} index={i.id} />)}
      </div>
    </div>
  )
}

export default CFavourites
