import React from 'react';
import Banner from './Banner';
import PopulationCourse from './PopulationCourse';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
     
            <PopulationCourse></PopulationCourse>
            <WhyChooseUs></WhyChooseUs>
            <TopInstructors></TopInstructors>

        </div>
    );
};

export default HomePage;