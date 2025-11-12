import React from 'react';
import { useState, useEffect } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const AllCoursesFilter = () => {

     const allCourses = useLoaderData();
    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    // Programming, Language, Computer Basics , Multimedia ,academy
    // filter set
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
        
      <div className="w-11/12 mx-auto p-6">
                {/* Filter Section */}
                <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Filter All Courses
                    </h2>
    
                    {/* Search */}
                    <div>
                         <h1 className="px-3 pb-2 font-medium">Course Title :</h1>
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
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col">
                            <h1 className="px-3 pb-2 font-medium">Category :</h1>
                            <select
                                name="category"
                                value={filters.category}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
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
                            <h1 className="px-3 pb-2 font-medium">Price :</h1>
                            <select
                                name="price"
                                value={filters.price}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                            >
                                <option>All</option>
                                <option>0-3000</option>
                                <option>3000-5000</option>
                                <option>5000-8000</option>
                                <option>8000+</option>
                            </select>
                        </div>
    
                        <div className="flex flex-col">
                            <h1 className="px-3 pb-2 font-medium">Duration :</h1>
                            <select
                                name="duration"
                                value={filters.duration}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="Any">All</option>
                                <option value="Short">Short (1-4 months)</option>
                                <option value="Medium">Medium (5-8 months)</option>
                                <option value="Long">Long (9+ months)</option>
                            </select>
    
                        </div>
                        <div className="flex flex-col">
                            <h1 className="px-3 pb-2 font-medium">Featured :</h1>
                            <select
                                name="featured"
                                value={filters.featured}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-400"
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
                            // className="btn btn-primary inline-block p-2  hover:scale-105  transition"
                            onClick={applyFilters}
                            className="btn btn-primary inline-block px-4  hover:scale-105  transition"
                        >
                            Apply Filters
                        </button>
                        <button
                            onClick={handleReset}
                            className="btn bg-blue-800 text-white inline-block px-4 rounded-xl hover:scale-105 transition"
                        >
                            Reset Filter
                        </button>
                    </div>
                </div>
    
                {/* Course Display Section */}
                <div>
                    <h1 className='text-4xl font-semibold my-5  text-black text-center'>All Courses</h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course._id} className='border-2 border-gray-100 p-4 shadow-md shadow-gray-400 my-3 md:my-2 lg:my-5 rounded-lg lg:w-[300px] xl:w-full'>
                                    <div className=''>
                                        <img className='w-full rounded-xl h-[200px]' src={course.imageURL} alt="" />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='text-[#070303] text-2xl text-start font-semibold'>{course.title}</h1>
                                        <div className='inline-block bg-[#B9F8CF] px-3 py-1 my-2 rounded-full'>
                                            <h2>{course.category}</h2>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='w-full flex text-2xl justify-between font-semibold'>
                                                <div className='flex items-center'>
                                                    <FaBangladeshiTakaSign />
                                                    <p >{course.price}</p>
                                                </div>
                                                <h1>{course.duration}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`/courses/details/${course._id}`} className='btn btn-primary p-2 w-full hover:scale-105 '>ViewDetails</Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-full">
                                No courses found with selected filters.
                            </p>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default AllCoursesFilter;