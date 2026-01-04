import React from 'react';

import { Link } from 'react-router';

const MyEnrolledCard = ({ enrolledCourse }) => {

    const { title, imageURL,description, price, duration, category, _id } = enrolledCourse;
    return (
        <div className="card bg-[#B9F8CF] shadow-md h-full flex flex-col">
                    {/* Image */}
                    <figure className="h-48">
                        <img
                            src={imageURL}
                            alt={title}
                            className="h-full w-full"
                        />
                    </figure>
        
                    {/* Content */}
                    <div className="card-body flex flex-col">
                        <h2 className="card-title dark:text-black text-lg">{title}</h2>
        
                        {/* Short Description */}
                        <p className="text-sm text-gray-500 dark:text-black line-clamp-2">
                            {description}
                        </p>
        
                        {/* Meta Info */}
                        <div className="mt-2 dark:text-black text-sm space-y-1">
                            <p>Category: <span className="font-medium">{category}</span></p>
                            <div className='flex justify-between items-center'>
                                <p>Duration: <span className="font-medium">{duration}</span></p>
                                <p>Price: <span className="font-medium">৳{price}</span></p>
                            </div>
                        </div>
        
                        {/* Button */}
                        <div className="card-actions mt-auto">
                            <Link to={`/courses/details/${_id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
                        </div>
                    </div>
                </div>
    );
};

export default MyEnrolledCard;