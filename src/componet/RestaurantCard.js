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
   <div className='res_container'>
     <div className='rescard'>
      <img alt={CDN_URL+cloudinaryImageId} className='resImg' src={CDN_URL+ cloudinaryImageId}/>
      <h4>{name}</h4>
      <h5>{cuisines.slice(1,6).join(" , ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>Rs. {costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
   </div>
  )
}

export default RestaurantCard