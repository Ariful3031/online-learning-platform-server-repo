import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

import logoImg from '../../assets/online logo.png'


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [theme,setTheme]=useState(localStorage.getItem('theme')|| "light")

    useEffect(()=>{
        const html = document.querySelector('html')
        html.setAttribute("data-theme",theme)
        localStorage.setItem("theme",theme)
    },[theme])

      const handleTheme = (checked) => {
        // console.log(checked)
       setTheme(checked?"dark":"light")
    }



    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/courses'>All-Courses</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

  
    return (
        <div className="navbar bg-[#F0FDF4] px-5 md:px-10 lg:px-15 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            Links
                        }
                    </ul>
                </div>
                <img className='w-20 h-15 rounded-full' src={logoImg} alt="" />

            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Links
                    }
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5">
                <div>
                    <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" value="synthwave" className="toggle theme-controller" />
                </div>

                <div>
                    {
                        user ? (<button onClick={logoutUser} className="btn btn-primary hover:scale-105 text-white px-8 rounded-lg">Logout</button>) : (<Link to='/login' className="btn btn-primary hover:scale-105text-white px-8 rounded-lg">Login</Link>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;