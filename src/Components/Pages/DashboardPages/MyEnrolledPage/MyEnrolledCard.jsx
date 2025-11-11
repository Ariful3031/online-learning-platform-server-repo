import React from 'react';
import { FaBangladeshiTakaSign, FaRegStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router';

const MyEnrolledCard = ({ enrolledCourse }) => {

    const { title, imageURL, price, duration, category, _id } = enrolledCourse;
    return (
        <div className='border-2 border-gray-100 p-4 shadow-md shadow-gray-400 my-3 md:my-2 lg:my-5 rounded-lg lg:w-[300px] xl:w-full'>
            <div className=''>
                <img className='w-full h-[200px]' src={imageURL} alt="" />
            </div>
            <div className='p-2'>
                <h1 className='text-[#070303] text-2xl text-start font-semibold'>{title}</h1>
                <div className='inline-block bg-[#B9F8CF] px-3 py-1 my-2 rounded-full'>
                    <h2>{category}</h2>
                </div>
                <div className='flex justify-between'>
                    <div className='w-full flex text-2xl justify-between font-semibold'>
                        <div className='flex items-center'>
                            <FaBangladeshiTakaSign />
                            <p >{price}</p>
                        </div>
                        <h1>{duration}</h1>
                    </div>
                </div>
            </div>
            <Link to={`/courses/enrolled/details/${_id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
        </div>
    );
};

export default MyEnrolledCard;