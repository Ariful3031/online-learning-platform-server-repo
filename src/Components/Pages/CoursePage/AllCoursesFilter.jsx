import React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigation } from "react-router";
import Skeletion from '../../Loading/Skeletion';

const AllCoursesFilter = () => {

    const navigation = useNavigation();
    // const allCourses = useLoaderData();
    const [allCourses, setAllCourses] = useState([]);
    // console.log(allCourses)
    const [total, setTotal] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    console.log('current page is ', currentPage)

    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    const limit = 8
    // console.log(filteredCourses)

    useEffect(() => {
        fetch(`https://online-learning-platform-server-eta.vercel.app/courses?limit=${limit}&skip=${currentPage * limit}`)
            .then((res) => res.json())
            .then((data) => {
                setAllCourses(data.result)
                console.log(data.result)
                console.log(data.total)
                setTotal(data.total)
                setFilteredCourses(data.result);
                const page = Math.ceil(data.total / limit);
                setTotalPage(page);
            })
    }, [limit, currentPage])



    const [filters, setFilters] = useState({
        search: "",
        category: "All",
        price: "All",
        duration: "Any",
        featured: "All",
    });

    // filter change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    // filter apply
    const applyFilters = () => {
        let filtered = [...allCourses];

        // Search Filter
        if (filters.search.trim()) {
            filtered = filtered.filter((course) =>
                course.title.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        // Category Filter
        if (filters.category !== "All") {
            filtered = filtered.filter(
                (course) => course.category === filters.category
            );
        }

        // Price Filter
        if (filters.price && filters.price !== "All") {
            const priceStr = filters.price.trim();
            if (priceStr.endsWith("+")) {
                const min = parseInt(priceStr.replace("+", "").trim());
                filtered = filtered.filter((course) => Number(course.price) >= min);
            } else {
                const [min, max] = priceStr.split("-").map((v) => parseInt(v.trim()));
                filtered = filtered.filter((course) => {
                    const price = Number(course.price);
                    return price >= min && price <= max;
                });
            }
        }

        // filter duration

        if (filters.duration !== "Any") {
            filtered = filtered.filter((course) => {
                const duration = parseInt(course.duration); // "6 month" → 6
                switch (filters.duration) {
                    case "Short":
                        return duration >= 1 && duration <= 4;
                    case "Medium":
                        return duration >= 5 && duration <= 8;
                    case "Long":
                        return duration >= 9;
                    default:
                        return true;
                }
            });
        }


        // Featured Filter
        if (filters.featured !== "All") {
            filtered = filtered.filter(
                (course) =>
                    (filters.featured === "True" && course.isFeatured) ||
                    (filters.featured === "False" && !course.isFeatured)
            );
        }

        setFilteredCourses(filtered);
    };

    // Reset Filters
    const handleReset = () => {
        setFilters({
            search: "",
            category: "All",
            price: "All",
            duration: "Any",
            featured: "All",
        });
        setFilteredCourses(allCourses);
    };

    // if filter update value will change
    useEffect(() => {
        applyFilters();
    }, [filters]);
    return (

        <div className="pb-6">
            {navigation.state === "loading" && <Skeletion />}
            {/* Filter Section */}
            <div className="bg-white dark:bg-[#328EFF] dark:text-white shadow-md rounded-2xl p-6 mb-8 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    Filter All Courses
                </h2>

                {/* Search */}
                <div>
                    <h1 className="px-3 pb-2 font-medium">Title:</h1>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            name="search"
                            value={filters.search}
                            onChange={handleChange}
                            placeholder=" Search course name..."
                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>
                </div>

                {/* Dropdown Filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col">
                        <h1 className="px-3 pb-2 font-medium">Category:</h1>
                        <select
                            name="category"
                            value={filters.category}
                            onChange={handleChange}
                            className="border border-gray-300 dark:text-black rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                        >
                            <option>All</option>
                            <option>Web Development</option>
                            <option>Design</option>
                            <option>Marketing</option>
                            <option>Data Science</option>
                            <option>Programming</option>
                            <option>Language</option>
                            <option>Computer Basics</option>
                            <option>Multimedia</option>
                            <option>Academy</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="px-3 pb-2 font-medium">Price:</h1>
                        <select
                            name="price"
                            value={filters.price}
                            onChange={handleChange}
                            className="border border-gray-300 dark:text-black rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                        >
                            <option>All</option>
                            <option>0-3000</option>
                            <option>3000-5000</option>
                            <option>5000-8000</option>
                            <option>8000+</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="px-3 pb-2 font-medium">Duration:</h1>
                        <select
                            name="duration"
                            value={filters.duration}
                            onChange={handleChange}
                            className="border border-gray-300 dark:text-black rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="Any">All</option>
                            <option value="Short">Short (1-4 months)</option>
                            <option value="Medium">Medium (5-8 months)</option>
                            <option value="Long">Long (9+ months)</option>
                        </select>

                    </div>
                    <div className="flex flex-col">
                        <h1 className="px-3 pb-2 font-medium">Featured:</h1>
                        <select
                            name="featured"
                            value={filters.featured}
                            onChange={handleChange}
                            className="border border-gray-300 dark:text-black rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                        >
                            <option>All</option>
                            <option>True</option>
                            <option>False</option>
                        </select>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button

                        onClick={applyFilters}
                        className="btn btn-primary inline-block px-4  hover:scale-105  transition"
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={handleReset}
                        className="btn btn-primary inline-block px-4  hover:scale-105  transition"
                    >
                        Reset Filter
                    </button>
                </div>
            </div>

            {/* Course Display Section */}
            <div>
                <h1 className='text-4xl font-semibold my-10  text-black dark:text-white w-[320px] mx-auto'>All Courses ({total})</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (

                            <div key={course._id} className="card bg-[#B9F8CF] shadow-md h-full flex flex-col">
                                {/* Image */}
                                <figure className="h-48">
                                    <img
                                        src={course.imageURL}
                                        alt={course.title}
                                        className="h-full w-full"
                                    />
                                </figure>

                                {/* Content */}
                                <div className="card-body flex flex-col">
                                    <h2 className="card-title dark:text-black text-lg">{course.title}</h2>

                                    {/* Short Description */}
                                    <p className="text-sm text-gray-500 dark:text-black line-clamp-2">
                                        {course.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="mt-2 text-sm dark:text-black space-y-1">
                                        <p>Category: <span className="font-medium">{course.category}</span></p>
                                        <div className='flex justify-between items-center'>
                                            <p>Duration: <span className="font-medium">{course.duration}</span></p>
                                            <p>Price: <span className="font-medium">৳{course.price}</span></p>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="card-actions mt-auto">
                                        <Link to={`/courses/details/${course._id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className=" text-3xl font-bold text-center text-gray-500 my-10 col-span-full">
                            No courses found with selected filters.
                        </p>
                    )}
                </div>
                <div className='flex flex-wrap mx-auto justify-center pt-10  gap-1'>
                    {
                        currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)} className='btn btn-primary hover:scale-105 text-white px-8 rounded-lg'>Prev</button>
                    }

                    {
                        [...Array(totalPage).keys()].map((i) => (<button onClick={() => setCurrentPage(i)} className={`btn ${i === currentPage && "bg-green-500"}`}>{i + 1}</button>))
                    }
                    {
                        currentPage < totalPage - 1 && <button onClick={() => setCurrentPage(currentPage + 1)} className='btn btn-primary hover:scale-105 text-white px-8 rounded-lg'>Next</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCoursesFilter;