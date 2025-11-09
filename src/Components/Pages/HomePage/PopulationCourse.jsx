import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaRegStarHalfStroke } from 'react-icons/fa6';

const PopulationCourse = () => {
    return (
        <div className='w-11/12 mx-auto text-center'>
            <h1 className='text-4xl font-semibold my-5  text-black w-[320px] mx-auto'>Population Course</h1>
            <div className='text-center shadow-md shadow-gray-400 my-5 rounded-lg w-[300px]'>
                <div className='bg-[#690B02] text-white rounded-t-lg hover:scale-105'>
                    <h1 className='text-3xl pt-2 mb-2'>১৯ তম শিক্ষক নিবন্ধন</h1>
                    <div>
                        <div className='inline-flex bg-white rounded-full overflow-hidden'>
                            <p className='px-2 py-1 text-[#070303]'>Combined Goal</p>
                            <p className='px-2 py-1 bg-amber-400 text-[#070303] rounded-full'>LiveBatch - 6</p>
                        </div>
                    </div>
                    <h1 className='mt-3 pb-3 text-3xl'>ভর্তি চলছে...</h1>
                </div>
                <div className='text-start p-2'>
                    <h1 className='text-[#070303] text-2xl font-semibold'>19th NTRCA preli<span> Combined Goal</span> <span>Live Batch...</span></h1>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center text-2xl font-semibold'>
                            <FaBangladeshiTakaSign />
                            <p > 2499</p>
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
                <button className='btn btn-primary p-2 w-full hover:scale-105'>ViewDetails</button>
            </div>
            {/* {
    "_id": "674d8a3e91b7a24561f3b962"2
    "title_bangla": "১৯ তম শিক্ষক নিবন্ধন",
    "title_english": "19th Teacher Registration",
    "batch_number": 6,
    "batch_name": "Combined Goal",
    "popularity": 80,
    "deadline": "2025-12-16T23:59:59Z",
    "image": "https://example.com/images/teacher-19.jpg",
    "location": "Dhaka, Bangladesh",
    "ratings": "4.6",
    "starIcon": "https://example.com/icons/star.svg",
    "contact": "+8801788123462",
    "description": "১৯ তম শিক্ষক নিবন্ধন পরীক্ষার জন্য শিক্ষার্থীরা এই কোর্সের মাধ্যমে প্রস্তুত হবে।"
  }, */}

        </div>
    );
};

export default PopulationCourse;