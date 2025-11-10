import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {

    const detailsData = useLoaderData();
    const { title_bangla, batch_name, batch_number, price, description, _id } = detailsData;
    console.log(detailsData)
    return (
        <div className='w-11/12 mx-auto bg-[#F1F5E8]'>
            <div className=' grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='bg-[#690B02] text-center text-white'>
                        <h1 className='text-5xl font-bold pt-5 mb-5'>{title_bangla}</h1>

                        <div className='inline-flex bg-white rounded-full overflow-hidden'>
                            <p className='px-2 py-1 text-3xl font-semibold text-[#070303]'>{batch_name}</p>
                            <p className='px-2 py-1 text-3xl font-semibold bg-amber-400 text-[#070303] rounded-full'>LiveBatch - {batch_number}</p>
                        </div>
                        <h1 className='mt-3 pb-5 text-3xl font-medium'>ভর্তি চলছে...</h1>
                    </div>

                </div>

                <div className='p-2 border-gray-200'>
                    <div className='flex items-center text-2xl font-semibold'>
                        <FaBangladeshiTakaSign />
                        <p>{price}</p>
                    </div>
                    <div className='w-full border-b-2 underline my-1'></div>
                    <p className='text-gray-500'>Course Duration : 6 month</p>
                    <p className='text-gray-500'>Total Lecture : 0</p>
                    <p className='text-gray-500'>Total Exam : 0</p>
                    <p className='text-gray-500'>Live Class : 0</p>

                    <button className='btn btn-primary p-2 w-full mt-3 hover:scale-105 '>Enroll Now</button>
                </div>

            </div>
            <div>
                <h1 className='text-2xl font-medium'>Description:</h1>
                <p>{description}</p>

            </div>

        </div>
    );
};

export default ViewDetails;