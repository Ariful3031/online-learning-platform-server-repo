import React from 'react';
import Banner from './Banner';
import PopulationCourse from './PopulationCourse';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';
import { useNavigation } from 'react-router';
import Loading from '../../Loading/Loading';



const HomePage = () => {
    const navigation = useNavigation();
    return (
        <div>
            {navigation.state === "loading" && <Loading></Loading>}
            <Banner></Banner>

            <PopulationCourse></PopulationCourse>
            <WhyChooseUs></WhyChooseUs>
            <TopInstructors></TopInstructors>

        </div>
    );
};

export default HomePage;