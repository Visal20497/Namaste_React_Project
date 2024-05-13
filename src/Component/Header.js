import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'
import { Link } from 'react-router-dom'
import useStatus from '../Utils/useStatus'
import { useSelector } from 'react-redux'

function Header() {
    let [btnName, setBtnName] = useState(false)
    const cart=useSelector((item)=>{
        return item.cart.item
      })
    const onlineStatus=useStatus()
    return (
        <div className='header flex justify-between m-1 border bg-pink-100 sm:bg-green-100'>
            <div className='container_logo '>
                <Link to='/'><img className="logo w-28" src={LOGO_URL} /></Link>
            </div>
            <div className='nav-items '>
                <ul className='flex p-4 m-4 items-center' >
                    <li className='px-4 text-lime-600 text-xl font-medium !important'>Online Status : {onlineStatus?"✅":"🔴"}</li>
                    <li className='px-4 text-blue-800 text-xl font-medium hover:text-red-500  !important'><Link to='/'className='Link'>Home</Link></li>
                    <li className='px-4 text-blue-800 text-xl font-medium hover:text-red-500  !important'><Link to='/about' className='Link'>About Us</Link></li>
                    <li className='px-4 text-blue-800 text-xl font-medium hover:text-red-500  !important'><Link to='/contact' className='Link'>Contact</Link></li>
                    <li className='px-4 text-blue-800 text-xl font-medium hover:text-red-500  !important'><Link to='/grocery' className='Link'>Grocery</Link></li>
                    <li className='px-4 text-blue-800 text-xl font-medium hover:text-red-500  !important'><Link to='/cart' className='Link flex '>Cart <h1 className='text-yellow-500 mx-1'><sup>{cart.length}</sup></h1></Link></li>
                    <button className='px-4 text-black text-xl font-medium bg-zinc-300 w-24 h-10 rounded-sm hover:bg-sky-300   !important' onClick={() => {
                        setBtnName(!btnName)
                    }} >{btnName ? "LogIn" : "LogOut"}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header