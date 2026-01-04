import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';

import { useLoaderData, useNavigate, useNavigation } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    const updateCourseData = useLoaderData();
    // console.log(updateCourseData._id);
    const navigate = useNavigate();
    const navigation =useNavigation();

    const { user } = useContext(AuthContext)
    const [categoryState, setCategoryState] = useState(updateCourseData?.category?.toString() || "");
    const [isFeaturedState, setIsFeaturedState] = useState(updateCourseData?.isFeatured?.toString() || "");
    // console.log(category, isFeatured)
    // console.log(user)
    const handleUpdateCourse = (event) => {
        event.preventDefault();



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {


                const title_course = event.target.title.value;
                const imageURL_course = event.target.image.value;
                const email_course = event.target.email.value;
                const category_course = categoryState;
                const duration_course = event.target.duration.value;
                const price_course = Number(event.target.price.value);
                const isFeatured_course = isFeaturedState === "true";
                const description_course = event.target.description.value;

                const updateCourse = {
                    title: title_course,
                    imageURL: imageURL_course,
                    email: email_course,
                    category: category_course,
                    duration: duration_course,
                    price: price_course,
                    isFeatured: isFeatured_course,
                    description: description_course

                }
                // console.log(title_course, imageURL_course, email_course, category_course, duration_course, price_course, isFeatured_course, description_course)
                console.log(updateCourse)


                fetch(`https://online-learning-platform-eight-pi.vercel.app/courses/${updateCourseData._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateCourse)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.matchedCount) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your course has been updated.",
                                icon: "success"
                            });
                            navigate(-1);
                            // console.log(data)
                        }
                    })
            }
        });

    }
 
    return (
        <div className='bg-[#FFF0E1] w-full mx-auto p-5 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold my-5  text-black text-center'> Update Your Course</h1>
             {navigation.state === "loading" && <Loading></Loading>}
            <div className="card bg-base-100 w-full mx-auto shrink-0 shadow-2xl">

                <div className="card-body">
                    <form onSubmit={handleUpdateCourse}>
                        <fieldset className="fieldset">
                            {/* Title */}
                            <label className="label text-black dark:text-white font-semibold">Title :</label>
                            <input type="text" name='title' required className="input text-black dark:text-white w-9/12 outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " defaultValue={updateCourseData.title} />
                            {/* Email */}
                            <label className="label text-black dark:text-white font-semibold">Email :</label>
                            <input type="email" name='email' required className="input w-9/12 text-black dark:text-white outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " readOnly defaultValue={user.email} />
                            {/* image url */}
                            <label className="label text-black dark:text-white font-semibold">image URL :</label>
                            <input type="url" name='image' required className="input w-full text-black dark:text-white  outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " defaultValue={updateCourseData.imageURL} />
                            <div className='grid grid-cols-2 gap-5'>

                                <div>
                                    {/* Category */}
                                    <label className="label text-black dark:text-white font-semibold">Category :</label>
                                    <select
                                        value={categoryState}
                                        onChange={(e) => setCategoryState(e.target.value)}
                                        required
                                        className="select text-black dark:text-white w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none"
                                    >
                                        <option value="" disabled>Pick a Category</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Design">Design</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Language">Language</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Computer Basics">Computer Basics</option>
                                        <option value="Multimedia">Multimedia</option>
                                        <option value="Academy">Academy</option>
                                    </select>
                                </div>
                                <div>
                                    {/* duration */}
                                    <label className="label text-black dark:text-white font-semibold">Duration :</label>
                                    <input type="text" name='duration' required className="input text-black dark:text-white w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " defaultValue={updateCourseData.duration} />
                                </div>

                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    {/* price */}
                                    <label className="label text-black dark:text-white font-semibold">Price :</label>
                                    <input type="number" name='price' required className="input text-black dark:text-white w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " defaultValue={updateCourseData.price} />
                                </div>
                                <div>
                                    {/* isFeatured */}
                                    <label className="label text-black dark:text-white font-semibold">Is Featured :</label>
                                    <select
                                        value={isFeaturedState}
                                        onChange={(e) => setIsFeaturedState(e.target.value)}

                                        required
                                        className="select text-black dark:text-white w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none"
                                    >
                                        <option value="" disabled>Pick a isFeatured</option>
                                        <option value="true">true</option>
                                        <option value="false">false</option>
                                    </select>

                                </div>

                            </div>
                            {/* description */}
                            <label className="label text-black dark:text-white font-semibold">Description :</label>
                            <textarea type="text" name='description' required className="input text-black dark:text-white w-full md:w-1/2 lg:w-2/3 border p-3 rounded outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none h-40 " defaultValue={updateCourseData.description} />

                            {/* button  */}
                            <button type='submit' className="btn inline-block btn-primary font-semibold border-none hover:scale-105 mt-4">Update</button>
                        </fieldset>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default UpdatePage;