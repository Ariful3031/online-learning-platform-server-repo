import React, { useEffect, useState } from 'react';
import CourseCard from './courseCard';

const PopulationCourse = () => {
    
      const [populationCoursesData,setPopulationCoursesData]=useState([]);

    console.log(populationCoursesData);

    useEffect(()=>{
        fetch('https://online-learning-platform-eight-pi.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>{
            setPopulationCoursesData(data)
        })
    },[])
    const featuredData = populationCoursesData.filter(course => course.isFeatured === true).slice(0, 8);
    // console.log(featuredData)
    // console.log(populationCoursesData);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-semibold my-10  text-black dark:text-white w-[320px] mx-auto'>Population Course</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    featuredData.map(data => <CourseCard key={data._id} data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopulationCourse;