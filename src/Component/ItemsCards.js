import React from 'react'
import { CDN_URL } from '../Utils/constant'
import { addItem } from '../Utils/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

function ItemsCards({ item:data }) {
    // console.log(item)
    let dispatch=useDispatch()
    function handleAddItems(item){
        dispatch(addItem(item))
    }
    // console.log(cart)
    return (
        <div>
            {data?.map((item) => {
                return <div data-testid="foodItems" className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between' key={item.card.info.id}>


                    <div className='w-10/12'>
                        <div className='py-2 '>
                            <span>{item.card.info.name}</span>
                            <span> -₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-2/12 '>
                     <button className='bg-slate-50 text-green-900 absolute p-1 shadow-lg rounded-lg' onClick={()=>{handleAddItems(item)}}>Add+</button>   
                    <img  src={CDN_URL + item.card.info.imageId} alt={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemsCards