import React from 'react';
import Banner from './Banner';
import PopulationCourse from './PopulationCourse';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <PopulationCourse></PopulationCourse>
            </div>

        </div>
    );
};

export default HomePage;