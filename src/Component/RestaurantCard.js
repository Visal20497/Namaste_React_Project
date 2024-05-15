import React from 'react'
import { CDN_URL } from '../Utils/constant'

function RestaurantCard({resData}) {
  const { cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
   sla:{slaString} }=resData?.info 

  return (
   <div data-testid="resCard" className='res_container m-3 p-4 w-[200px] bg-gray-100 h-[420px] rounded-lg hover:bg-gray-200'>
     <div className='rescard'>
      <img alt={CDN_URL+cloudinaryImageId} className='resImg w-[100%] h-[170px] ' src={CDN_URL+ cloudinaryImageId}/>
      <h4 className='font-bold py-2 text-lg'>{name}</h4>
      <h5>{cuisines.slice(1,6).join(" , ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5 className='font-semibold'>Rs. {costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
   </div>
  )
}

export const withPromotedlevel=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className='absolute bg-slate-800 text-white p-1 rounded-lg'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard