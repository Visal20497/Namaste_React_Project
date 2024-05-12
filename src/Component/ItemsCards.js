import React from 'react'
import { CDN_URL } from '../Utils/constant'

function ItemsCards({ item }) {
    // console.log(item)
    return (
        <div>
            {item?.map((item) => {
                return <div className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between' key={item.card.info.id}>


                    <div className='w-10/12'>
                        <div className='py-2 '>
                            <span>{item.card.info.name}</span>
                            <span> -₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-2/12 '>
                     <button className='bg-slate-50 text-green-900 absolute p-1 shadow-lg rounded-lg'>Add+</button>   
                    <img  src={CDN_URL + item.card.info.imageId} alt={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemsCards