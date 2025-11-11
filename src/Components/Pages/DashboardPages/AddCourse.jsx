import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const AddCourse = () => {
    const { user } = useContext(AuthContext)
    const [categoryState, setCategoryState] = useState("");
    const [isFeaturedState, setIsFeaturedState] = useState("")
    // console.log(category, isFeatured)
    // console.log(user)


    const handleAddCourse = (event) => {

        event.preventDefault();
        const title_course = event.target.title.value;
        const imageURL_course = event.target.image.value;
        const email_course = event.target.email.value;
        const category_course = categoryState;
        const duration_course = event.target.duration.value;
        const price_course =Number(event.target.price.value);
        const isFeatured_course = isFeaturedState === "true";
        const description_course = event.target.description.value;
        const newCourse = {
            title: title_course,
            imageURL: imageURL_course,
            email: email_course,
            category: category_course,
            duration: duration_course,
            price: price_course,
            isFeatured:isFeatured_course,
            description: description_course

        }
        // console.log(title_course, imageURL_course, email_course, category_course, duration_course, price_course, isFeatured_course, description_course)
        console.log(newCourse)
        fetch('http://localhost:3000/courses',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCourse)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    //title, image URL, price, duration, category, and description , isFeatured.
    return (
        <div className='bg-[#FFF0E1] w-full mx-auto p-5 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold my-5  text-black w-[320px] mx-auto'> Add a New Course</h1>
            <div className="card bg-base-100 w-full mx-auto shrink-0 shadow-2xl">

                <div className="card-body">
                    <form onSubmit={handleAddCourse}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-black font-semibold">Title</label>
                            <input type="text" name='title' required className="input text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="name" />
                            {/* image url */}

                            <label className="label text-black font-semibold">image URL</label>
                            <input type="url" name='image' required className="input w-full text-black  outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Image Url" />
                            {/* Email */}
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" name='email' required className="input w-full text-black outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " readOnly defaultValue={user.email} />

                            {/* Category */}
                            <label className="label text-black font-semibold">Category</label>
                            <select
                                value={categoryState}
                                onChange={(e) => setCategoryState(e.target.value)}
                                required
                                className="select text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none"
                            >
                                <option value="" disabled>Pick a Category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Language">Language</option>
                            </select>

                            {/* duration */}
                            <label className="label text-black font-semibold">Duration</label>
                            <input type="text" name='duration' required className="input text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="duration" />
                            {/* price */}
                            <label className="label text-black font-semibold">Price</label>
                            <input type="number" name='price' required className="input text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="price" />

                            {/* description */}
                            <label className="label text-black font-semibold">Description</label>
                            <input type="text" name='description' required className="input text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="description" />
                            {/* isFeatured */}
                            <label className="label text-black font-semibold">Is Featured</label>
                            <select
                                value={isFeaturedState}
                                onChange={(e) => setIsFeaturedState(e.target.value)}
                                required
                                className="select text-black w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none"
                            >
                                <option value="" disabled>Pick a isFeatured</option>
                                <option value="true">true</option>
                                <option value="false">false</option>

                            </select>

                            {/* button  */}
                            <button className="btn inline-block btn-primary font-semibold border-none hover:scale-105 mt-4"> Add Course</button>
                        </fieldset>
                    </form>
                </div>


            </div>
        </div>
    );
};


export default AddCourse;