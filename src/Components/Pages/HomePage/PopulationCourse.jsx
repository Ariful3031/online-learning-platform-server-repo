import React from 'react';
import { DiVim } from 'react-icons/di';

import { useLoaderData } from 'react-router';
import CourseCard from './courseCard';

const PopulationCourse = () => {
    const populationCoursesData = useLoaderData();
    console.log(populationCoursesData);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-semibold my-5  text-black w-[320px] mx-auto'>Population Course</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-5'>
                {
                    populationCoursesData.map(data => <CourseCard key={data._id} data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopulationCourse;