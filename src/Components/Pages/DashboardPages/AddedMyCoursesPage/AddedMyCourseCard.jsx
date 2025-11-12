import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddedMyCourseCard = ({ course,setAddedCourses,AddedCourses }) => {
    const { title, imageURL, _id } = course;
    // console.log(_id)

    const handleDeleteButton = (_id) => {
        // console.log('Click Delete button', _id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/courses/${_id}`, {

                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                            const coursesRemaining =AddedCourses.filter (course =>course._id !== _id);
                            setAddedCourses(coursesRemaining);
                        }
                    })
            }
        });

    }
    // console.log(course)
    return (
        <div className='border-2 border-gray-100 p-4 shadow-md shadow-gray-400 my-3 md:my-2 lg:my-5 rounded-lg lg:w-[300px] xl:w-full'>
            <div className=''>
                <img className='w-full h-[200px]' src={imageURL} alt="" />
            </div>
            <h1 className='text-[#070303] text-2xl my-2 text-start font-semibold'>{title}</h1>
            <Link to={`/courses/details/${_id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
            <div className='grid grid-cols-2 my-2 gap-2'>
                <Link to={`/dashboard/my_added_course/update_course/${_id}`} className='btn bg-blue-800 text-white p-2 w-full hover:scale-105 '>Update</Link>
                <button onClick={() => handleDeleteButton(_id)} className='btn bg-red-500 text-white p-2 w-full hover:scale-105 '>Delete</button>
            </div>

        </div>
    );
};

export default AddedMyCourseCard;