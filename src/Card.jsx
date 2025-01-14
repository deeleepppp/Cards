import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Card({name,artist,image,added,handleClickFunc,index}) {
  
  return (
    <div className='w-50 p-4 flex gap-4 pb-8 relative rounded-md bg-zinc-100 mt-10'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='object-cover h-full w-full' src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='text-xl leading-none font-semibold'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button onClick={()=>handleClickFunc(index)} className={`px-3 py-2 ${added?"bg-teal-500":"bg-orange-600"} absolute bottom-0 text-white text-xs -translate-x-[50%] whitespace-nowrap translate-y-[50%] left-1/2 rounded-full`}>{added?'Added':'Add to Favorites'}</button>
       
 

    </div>
  )
}
