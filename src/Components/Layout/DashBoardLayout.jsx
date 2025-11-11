import React from 'react';
import { NavLink, Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div className=' w-11/12 mx-auto grid grid-cols-5 border-2 border-gray-600'>
            <aside className='left_aside min-h-50 border-2 border-gray-300 shadow-xl p-3'>
                <nav>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/my_enrolled_course'>MyEnrolledCourse</NavLink>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/Add_course'>AddCourse</NavLink>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/my_added_course'>MyAddedCourse</NavLink>
                </nav>

            </aside>
            <aside className="right_aside col-span-4">
                <Outlet></Outlet>
            </aside>
        </div>
    );
};

export default DashBoardLayout;