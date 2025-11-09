import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaRegStarHalfStroke } from 'react-icons/fa6';

const CourseCard = ({ data }) => {
    const { title_bangla, batch_name, batch_number, title_english, price } = data;
    console.log(data)
    return (
        <div className=' text-center border-2 border-gray-100 px-2 pt-2 py-3 shadow-md shadow-gray-400 my-5 rounded-lg w-[300px]'>
            <div className='bg-[#690B02] text-white h-[175px] rounded-t-lg hover:scale-105'>
                <h1 className='text-3xl pt-2 mb-2'>{title_bangla}</h1>
                <div>
                    <div className='inline-flex bg-white rounded-full overflow-hidden'>
                        <p className='px-2 py-1 text-[#070303]'>{batch_name}</p>
                        <p className='px-2 py-1 bg-amber-400 text-[#070303] rounded-full'>LiveBatch - {batch_number}</p>
                    </div>
                </div>
                <h1 className='mt-3 pb-3 text-3xl'>ভর্তি চলছে...</h1>
            </div>
            <div className='text-start p-2'>
                <h1 className='text-[#070303] text-2xl font-semibold'>{title_english}<span> {batch_name}</span><span> Live Batch...</span></h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center text-2xl font-semibold'>
                        <FaBangladeshiTakaSign />
                        <p >{price}</p>
                    </div>

                    <div className='flex text-orange-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                </div>
            </div>
            <button className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</button>
        </div>

        //   {
        //     "_id": "674d8a3e91b7a24561f3b962",
        //     "title_bangla": "১৯ তম শিক্ষক নিবন্ধন",
        //     "title_english": "19th Teacher Registration",
        //     "batch_number": 6,
        //     "batch_name": "Combined Goal",
        //     "popularity": 80,
        //     "deadline": "2025-12-16T23:59:59Z",
        //     "image": "https://example.com/images/teacher-19.jpg",
        //     "location": "Dhaka, Bangladesh",
        //     "ratings": "4.6",
        //     "starIcon": "https://example.com/icons/star.svg",
        //     "contact": "+8801788123462",
        //     "description": "১৯ তম শিক্ষক নিবন্ধন পরীক্ষার জন্য শিক্ষার্থীরা এই কোর্সের মাধ্যমে প্রস্তুত হবে।"
        //   }



    );
};

export default CourseCard;