import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'
import { Link } from 'react-router-dom'
import useStatus from '../Utils/useStatus'

function Header() {
    let [btnName, setBtnName] = useState(false)
    const onlineStatus=useStatus()
    return (
        <div className='header'>
            <div className='container_logo'>
                <Link to='/'><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className='nav-items'>
                <ul >
                    <li>OnlineStatus : {onlineStatus?"✅":"🔴"}</li>
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