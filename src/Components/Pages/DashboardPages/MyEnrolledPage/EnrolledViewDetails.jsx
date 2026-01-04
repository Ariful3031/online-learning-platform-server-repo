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
         <div className="w-11/12 mx-auto py-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                {/* Image Section */}
                <div className="relative">
                    {isFeatured && (
                        <span className="badge badge-primary absolute top-3 left-3 md:top-4 md:left-4">
                            Featured
                        </span>
                    )}

                    <img
                        src={imageURL}
                        alt={title}
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover rounded-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-5">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                        {title}
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="p-4 rounded-lg bg-base-200">
                            <span className="font-medium">Category:</span> {category}
                        </div>
                        <div className="p-4 rounded-lg bg-base-200">
                            <span className="font-medium">Duration:</span> {duration}
                        </div>
                        <div className="p-4 rounded-lg bg-base-200">
                            <span className="font-medium">Price:</span> ৳{price}
                        </div>
                        <div className="p-4 rounded-lg bg-base-200">
                            <span className="font-medium">Level:</span> Beginner
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                        <button onClick={handleEnrollButton} className='btn btn-primary w-full sm:w-auto sm:px-10 hover:scale-105 '>Enroll Now</button>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default EnrolledViewDetails;