import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import AddedMyCourseCard from './AddedMyCourseCard';
import { useNavigation } from 'react-router';
import Loading from '../../../Loading/Loading';

const MyAddedCourse = () => {

    const {user}=useContext(AuthContext);
    const [AddedCourses,setAddedCourses]=useState([]);
    const navigation =useNavigation();
    // console.log(user)
    // console.log(AddedCourses);

    useEffect(()=>{
        fetch(`http://localhost:3000/courses?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setAddedCourses(data);
            // console.log(data)
        })
    },[user.email])
    return (
        <div className=''>
            <h1 className='text-4xl font-semibold my-5  text-black w-[320px] mx-auto'>My Added Courses</h1>
             {navigation.state === "loading" && <Loading></Loading>}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-5'>
                {
              AddedCourses.map(course=><AddedMyCourseCard key={course._id} setAddedCourses={setAddedCourses} AddedCourses={AddedCourses} course={course}></AddedMyCourseCard>)  
            }
            </div>
        </div>
       
    );
};

export default MyAddedCourse;