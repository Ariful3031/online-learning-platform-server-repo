import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router';
import Loading from '../Loading/Loading';

const DashBoardLayout = () => {
    const navigation =useNavigation();
    return (
        <div className=' w-11/12 mx-auto grid grid-cols-5'>
            
            <aside className='left_aside min-h-50 border-2 border-gray-300 shadow-xl p-3'>
                <nav>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/my_enrolled_course'>MyEnrolledCourse</NavLink>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/Add_course'>AddCourse</NavLink>
                    <NavLink className='btn btn-primary hover:scale-105 mt-3 w-full' to='/dashboard/my_added_course'>MyAddedCourse</NavLink>
                </nav>

            </aside>
            <aside className="right_aside col-span-4 border-2 border-gray-300 shadow-xl p-3">
                {navigation.state === "loading" && <Loading></Loading>}
                <Outlet></Outlet>
            </aside>
        </div>
    );
};

export default DashBoardLayout;