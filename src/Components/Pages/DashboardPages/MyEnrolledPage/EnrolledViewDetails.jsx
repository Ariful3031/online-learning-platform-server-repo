import React, { useContext } from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthContext';




const EnrolledViewDetails = () => {
    const { user } = useContext(AuthContext)

    console.log(user);
    const detailsData = useLoaderData();
    // console.log(detailsData)
    const { title, imageURL, category, price, description, duration, _id } = detailsData;
    // console.log(detailsData)


    return (
        <div className='bg-[#F1F5E8]'>
            <div className='w-11/12  mx-auto p-10'>
                <div className='md:grid md:grid-cols-3'>
                    <div className='md:col-span-2'>
                        {navigation.state === "loading" && <Loading></Loading>}
                        <img className='w-full h-[300px] md:h-[500px] rounded-xl' src={imageURL} alt="" />
                    </div>

                    <div className='md:ml-2 lg:m-4 mt-4 rounded-xl lg:my-0 p-3 bg-white border-gray-200'>
                        <h1 className='text-2xl font-semibold text-center my-3'>{title}</h1>
                        <div className='flex items-center justify-between text-2xl font-semibold'>
                            <div className='inline-block bg-[#B9F8CF] px-3 py-1 my-2 rounded-full'>
                                <h2>{category}</h2>
                            </div>
                            <div className='flex items-center'>
                                <FaBangladeshiTakaSign />
                                <p>{price}</p>
                            </div>
                        </div>
                        <div className='w-full border-b-2 underline my-3'></div>
                        <p className='text-gray-500'>Course Duration : {duration}</p>
                        <p className='text-gray-500'>Total Lecture : 0</p>
                        <p className='text-gray-500'>Total Exam : 0</p>
                        <p className='text-gray-500'>Live Class : 0</p>
                        <Link to='/dashboard/my_enrolled_course' className='btn btn-primary p-2 w-full mt-3 hover:scale-105 '>Go back </Link>
                    </div>

                </div>
                <div>
                    <h1 className='text-2xl md:my-2 font-medium'>Description:</h1>
                    <p>{description}</p>

                </div>

            </div>

        </div>
    );
};

export default EnrolledViewDetails;