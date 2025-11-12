import React from 'react';
import { Link } from 'react-router';

const AddedMyCourseCard = ({ course }) => {
    const { title, imageURL, _id } = course;

    // console.log(course)
    return (
        <div className='border-2 border-gray-100 p-4 shadow-md shadow-gray-400 my-3 md:my-2 lg:my-5 rounded-lg lg:w-[300px] xl:w-full'>
            <div className=''>
                <img className='w-full h-[200px]' src={imageURL} alt="" />
            </div>
            <h1 className='text-[#070303] text-2xl my-2 text-start font-semibold'>{title}</h1>
            <Link to={`/courses/details/${_id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
            <div className='grid grid-cols-2 my-2 gap-2'>
                <Link to={`/dashboard/my_added_course/update_course/${_id}`} className='btn bg-blue-800 text-white p-2 w-full hover:scale-105 '>Update</Link>
                <button className='btn bg-red-500 text-white p-2 w-full hover:scale-105 '>Delete</button>
            </div>

        </div>
    );
};

export default AddedMyCourseCard;