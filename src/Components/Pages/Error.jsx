import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
         <div className='py-20'>
            <img className='w-[460px] h-[395px] px-5 py-15 mx-auto' src={errorImg} alt="" />
            <h2 className='text-5xl font-semibold text-[#001931]'>Oops, page not found!</h2>
            <p className='text-xl text-[#627382] mt-2 mb-4'>The page you are looking for is not available.</p>
            <Link to='/'>
                <button className='btn btn-primary'>Go Back!</button>
            </Link>

        </div>
    );
};

export default Error;