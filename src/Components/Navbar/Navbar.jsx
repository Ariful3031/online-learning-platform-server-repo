import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

import logoImg from '../../assets/online logo.png'

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    const Links = <>
        <li><NavLink className="dark:text-white" to='/'>Home</NavLink></li>
        <li><NavLink className="dark:text-white" to='/courses'>All-Courses</NavLink></li>
        <li><NavLink className="dark:text-white" to='/free_study_room'>Free Studyroom</NavLink></li>


        {
            user && <>
                <li><NavLink className="dark:text-white" to='/premimum_courses'>Premimum Courses</NavLink></li>
                <li><NavLink className="dark:text-white" to='/exam_courses'>Exam</NavLink></li>
                <li><NavLink className="dark:text-white" to='/profile'>Profile</NavLink></li>
                <li><NavLink className="dark:text-white" to='/dashboard'>Dashboard</NavLink></li>
            </>
        }

    </>

    return (
        <div className='bg-[#F0FDF4] sticky top-0 z-[1000] dark:bg-gray-900'>
            <div className="navbar w-11/12 mx-auto px-0 dark:bg-gray-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <img className='w-20 h-15 rounded-xl' src={logoImg} alt="" />
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-5">
                    <div>
                        <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" className="toggle theme-controller" />
                    </div>

                    <div>
                        {
                            user
                                ? <button onClick={logoutUser} className="btn btn-primary hover:scale-105 text-white px-8 rounded-lg">Logout</button>
                                : <Link to='/login' className="btn btn-primary hover:scale-105 text-white px-8 rounded-lg">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
