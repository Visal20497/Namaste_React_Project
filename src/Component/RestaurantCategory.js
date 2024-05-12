import React, { useState } from 'react'
import ItemsCards from './ItemsCards'

function RestaurantCategory({data,showItems,setShowIndex}) {
  // console.log(data)
  function handleClick(){
    setShowIndex()
  }
 
  return (
    <div className='w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-2 '>
      <div className='flex justify-between'>
      <span className='font-bold text-lg cursor-pointer' onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
      <span className='cursor-pointer' onClick={handleClick}>⬇️</span>
      </div>
      {showItems && <ItemsCards item={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory