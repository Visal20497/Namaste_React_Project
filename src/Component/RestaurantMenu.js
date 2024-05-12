import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../Utils/constant'
import Shimmer from './Shimmer'
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
        setResMenu(response.data)
  
    }
    useEffect(()=>{
         fetchData()
    },[])
   
    if(resMenu===null)return <Shimmer/>
    // let {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    let {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info
    const category=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
      return item?.card?.["card"]?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  
    })
    // console.log(category)
  return (
    
    <div className='RestaurantMeu_container text-center'>
      <h1 className='font-bold text-4xl m-2'>{name}</h1>
      <p className='font-bold text-xl m-2'>{cuisines.join(" , ")}  - {costForTwoMessage}</p>
      <h3 className='m-1 font-semibold text-red-800' >MENU</h3>
      {category?.map((item,index)=>{
       return <RestaurantCategory data={item?.card?.card} showItems={index===showIndex?true:false}
       setShowIndex={()=>{setShowIndex(index)}}
       key={index}/>
      })}
    
    </div>
  )
}

export default RestaurantMenu