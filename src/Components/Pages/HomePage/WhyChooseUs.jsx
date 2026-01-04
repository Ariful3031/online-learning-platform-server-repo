import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { MdHeadsetMic, MdLibraryBooks } from 'react-icons/md';
import { SiInstructure } from 'react-icons/si';

const WhyChooseUs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-semibold my-10  text-black dark:text-white w-[320px] mx-auto'>Why Choose Us</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 justify-center text-center my-8 gap-3 sm:gap-5 md:gap-5'>
                <div className='border-2 border-gray-200 dark:border-none dark:bg-[#00D390] p-3 md:pb-5 w-full rounded-xl'>
                    <div className='flex items-center justify-center text-2xl text-blue-600 my-2 w-full mx-auto'>
                        <SiInstructure />
                    </div>
                    <p>Experienced instructors</p>
                </div>
                <div className='border-2 border-gray-200 dark:border-none dark:bg-[#00D390] p-3 md:pb-5 w-full rounded-xl'>
                    <div className='flex items-center justify-center text-2xl text-blue-600 my-2 w-full mx-auto'>
                        <CiYoutube />
                    </div>
                    <p>Practical projects</p>
                </div>
                <div className='border-2 border-gray-200 dark:border-none dark:bg-[#00D390] p-3 md:pb-5 w-full rounded-xl'>
                    <div className='flex items-center justify-center text-2xl text-blue-600 my-2 w-full mx-auto'>
                        <MdHeadsetMic />
                    </div>
                    <p>24/7 Support</p>
                </div>
                <div className='border-2 border-gray-200 dark:border-none dark:bg-[#00D390] p-3 md:pb-5 w-full rounded-xl'>
                    <div className='flex items-center justify-center text-2xl text-blue-600 my-2 w-full mx-auto'>
                        <MdLibraryBooks />
                    </div>
                    <p>Certification</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;