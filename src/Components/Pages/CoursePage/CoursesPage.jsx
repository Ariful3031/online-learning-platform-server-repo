import React from 'react';


import AllCoursesFilter from './AllCoursesFilter';
import { useNavigation } from 'react-router';
import Loading from '../../Loading/Loading';

const CoursesPage = () => {
const navigation =useNavigation();

    return (
            <div className='w-11/12 mx-auto'>
                 {navigation.state === "loading" && <Loading></Loading>}
                <AllCoursesFilter></AllCoursesFilter>

            </div>
       
    );
};

export default CoursesPage;