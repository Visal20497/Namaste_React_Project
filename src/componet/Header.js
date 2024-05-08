import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'
import { Link } from 'react-router-dom'

function Header() {
    let [btnName, setBtnName] = useState(false)
    return (
        <div className='header'>
            <div className='container_logo'>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul >
                    <li ><Link to='/'className='Link'>Home</Link></li>
                    <li><Link to='/about' className='Link'>About Us</Link></li>
                    <li><Link to='/contact' className='Link'>Contact</Link></li>
                    <li><Link to='/cart' className='Link'>Cart</Link></li>
                    <button className='btn' onClick={() => {
                        setBtnName(!btnName)
                    }} >{btnName ? "LogIn" : "LogOut"}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header