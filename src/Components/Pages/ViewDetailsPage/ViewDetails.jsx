import React, { useContext, useEffect, useState } from 'react';
import { FaBangladeshiTakaSign, FaGalacticSenate } from 'react-icons/fa6';
import { useNavigation, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthContext';
import Loading from '../../Loading/Loading';

const ViewDetails = () => {
    const { user,loading,setLoading } = useContext(AuthContext)
    const navigation = useNavigation()
    const [course, setCourse] = useState([])
   

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://online-learning-platform-eight-pi.vercel.app/courses/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`

            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCourse(data)
                setLoading(false)
            })
    }, [id,setLoading,user])
    const { title, imageURL, category, price, description, duration, _id } = course;

    const handleEnrollButton = () => {

        const enrolledUser = {
            course_id: _id,
            buyer_Name: user.displayName,
            buyer_email: user.email,
            buyer_image: user.photoURL
        }

        fetch('online-learning-platform-eight-pi.vercel.app/enrolled', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrolledUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Enrolled successful')
            })

    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='bg-[#F1F5E8]'>
            <div className='w-11/12  mx-auto p-10'>
                <div className=' md:grid md:grid-cols-3'>
                    <div className='md:col-span-2'>
                        {navigation.state === "loading" && <Loading></Loading>}
                        <img className='w-full h-[300px] md:h-[500px] rounded-xl' src={imageURL} alt="" />
                    </div>

                    <div className='md:ml-2 lg:m-4 mt-4 rounded-xl lg:my-0 p-3 bg-white border-gray-200'>
                        <h1 className='text-2xl font-semibold text-center my-3'>{title}</h1>
                        <div className='flex items-center justify-between text-2xl font-semibold'>
                            <div className='inline-block bg-[#B9F8CF] px-3 py-1 my-2 rounded-full'>
                                <h2>{category}</h2>
                            </div>
                            <div className='flex items-center'>
                                <FaBangladeshiTakaSign />
                                <p>{price}</p>
                            </div>
                        </div>
                        <div className='w-full border-b-2 underline my-3'></div>
                        <p className='text-gray-500'>Course Duration : {duration}</p>
                        <p className='text-gray-500'>Total Lecture : 0</p>
                        <p className='text-gray-500'>Total Exam : 0</p>
                        <p className='text-gray-500'>Live Class : 0</p>

                        <button onClick={handleEnrollButton} className='btn btn-primary p-2 w-full mt-3 hover:scale-105 '>Enroll Now</button>
                    </div>

                </div>
                <div>
                    <h1 className='text-2xl md:my-2 font-medium'>Description:</h1>
                    <p>{description}</p>

                </div>

            </div>

        </div>
    );
};

export default ViewDetails;