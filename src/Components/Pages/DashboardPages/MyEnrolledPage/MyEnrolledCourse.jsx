import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import MyEnrolledCard from './MyEnrolledCard';


const MyEnrolledCourse = () => {
    const { user } = useContext(AuthContext);
    const [myEnrolled, setMyEnrolled] = useState([]);
    const allCourses = useLoaderData();
    // console.log(allCourses)

    useEffect(() => {
        if (user?.email) {
            fetch(`https://online-learning-platform-eight-pi.vercel.app/enrolled?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyEnrolled(data)
                    // console.log(data)
                })
        }

    }, [user.email])
    // console.log(myEnrolled);
    const enrolledIds = myEnrolled.map(item => item.course_id);
    const userEnrolledCourses = allCourses.filter(course => enrolledIds.includes(course._id));
    // console.log(userEnrolledCourses)
    return (
        <div>
            <h1 className='text-4xl font-semibold my-5 text-black text-center'>My Enrolled Courses</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5'>
            {
                userEnrolledCourses.map(enrolledCourse => <MyEnrolledCard key={enrolledCourse._id} enrolledCourse={enrolledCourse}></MyEnrolledCard>)
            }
        </div>
        </div>
    );
};

export default MyEnrolledCourse;