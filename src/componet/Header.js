import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'

function Header() {
    let [btnName,setBtnName]=useState(false)
    return (
        <div className='header'>
            <div  className='container_logo'>
                <img className="logo" src={ LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className='btn' onClick={()=>{
                    setBtnName(!btnName)
                }} >{btnName?"LogIn":"LogOut"}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header