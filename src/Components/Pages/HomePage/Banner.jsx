import React from 'react';
import bannerImg from '../../../assets/online-learning-platform.avif'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center p-3 md:p-10 md:h-[500px] bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className=''>
                <h2 className='text-xl md:text-5xl font-medium mt-3 md:mt-10'>Online</h2>
                <h1 className='text-2xl md:text-7xl font-bold text-black my-2 md:my-5'>Education</h1>
                <p className='text-orange-500 text-xl md:text-3xl font-medium w-[150px] md:w-full'>Get Promo Up to 30% Off <br /> For This Year Only</p>
                <button className="btn btn-outline btn-primary mt-5 hover:scale-105">Register Now</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;