import React, { useContext, useEffect, useState } from 'react';
import {useLocation, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext';
import Loading from '../../Loading/Loading';

const ViewDetails = () => {
    const { user, loading, setLoading } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const [course, setCourse] = useState([])


    const { id } = useParams();

    useEffect(() => {
        fetch(`https://online-learning-platform-eight-pi.vercel.app/courses/${id}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`

            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCourse(data)
                setLoading(false)
            })
    }, [id, setLoading, user])
    const {
        title,
        description,
        imageURL,
        price,
        duration,
        category,
        isFeatured,
        _id,
    } = course;

    const handleEnrollButton = () => {

        if (!user) {
            navigate("/login", {
                state: location.pathname ,
                replace: true,
            });
            return;
        }

        const enrolledUser = {
            course_id: _id,
            buyer_Name: user.displayName,
            buyer_email: user.email,
            buyer_image: user.photoURL
        }

        fetch('https://online-learning-platform-eight-pi.vercel.app/enrolled', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrolledUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Enrolled successful')
            })
            .catch(err =>
                toast.error(err)
            )

    }
    if (loading) {
        return <Loading></Loading>
    }
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

export default ViewDetails;