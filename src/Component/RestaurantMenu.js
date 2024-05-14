import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../Utils/constant'
import { RestaurantMenuShimmer } from './Shimmer'
import RestaurantCategory from './RestaurantCategory';



function RestaurantMenu() {
    let [resMenu,setResMenu]=useState(null)
    let [showIndex,setShowIndex]=useState('')
    let {resId}=useParams()
    // console.log(resId)
    async function fetchData (){
        let url=MENU_API
        let data=await fetch(url+resId)
        let response= await data.json()
        // console.log(response.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        // console.log(response.data)
        setResMenu(response.data)
  
    }
    useEffect(()=>{
         fetchData()
    },[])
   
    if(resMenu===null)return <RestaurantMenuShimmer/>
    // let {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    let {name}=resMenu?.cards[2]?.card?.card?.info || ''
    let {cuisines}=resMenu?.cards[2]?.card?.card?.info || ''
    let {costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info || ''
    const category=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
      return item?.card?.["card"]?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  
    })
    // console.log(category)
  return (
    
    <div className='RestaurantMeu_container text-center'>
      <h1 className='font-bold text-4xl m-2'>{name}</h1>
      <p className='font-bold text-xl m-2 text-yellow-600'>{cuisines?cuisines.join(" , "):''}  - {costForTwoMessage}</p>
      {category?.map((item,index)=>{
       return <RestaurantCategory data={item?.card?.card} showItems={index===showIndex?true:false}
       setShowIndex={()=>{setShowIndex(index)}}
       setHideIndex={()=>{setShowIndex(null)}}
       key={index}/>
      })}
    
    </div>
  )
}

export default RestaurantMenu