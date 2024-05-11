import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../Utils/constant'
import Shimmer from './Shimmer'

function RestaurantMenu() {
    let [resMenu,setResMenu]=useState(null)
    let {resId}=useParams()
    console.log(resId)
    async function fetchData (){
        let url=MENU_API
        let data=await fetch(url+resId)
        let response= await data.json()
        console.log(response.data)
        setResMenu(response.data)
  
    }
    useEffect(()=>{
         fetchData()
    },[])
   
    if(resMenu===null)return <Shimmer/>
    let {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    let {name,cuisines,
      costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info
    console.log(name)
  return (
    
    <div className='RestaurantMeu_container'>
      <h1 style={{color:"blue"}}>{name}</h1>
      <p>{cuisines.join(",")}  - {costForTwoMessage}</p>
      <h3 style={{color:"#42f5cb"}}>MENU</h3>
      {itemCards?.map((item)=>{
        return <li key={item.card.info.id}>{item.card.info.name}- <strong>Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</strong></li>
      })}
    </div>
  )
}

export default RestaurantMenu