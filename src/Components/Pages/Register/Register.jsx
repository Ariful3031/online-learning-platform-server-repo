import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router';
import { IoMdEyeOff } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';

const Register = () => {
    const { createUser, setUser, googleSignin } = useContext(AuthContext);
    const [err, setErr] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    // console.log(createUser)
    const location = useLocation();
    const navigate = useNavigate();

    const passwordLengthExpression = /^.{6,}$/
    const passwordNumberExpression = /(?=.*\d)/
    const passwordUpperCaseExpression = /(?=.*[A-Z])/
    const passwordLowerCaseExpression = /(?=.*[a-z])/
    const passwordSpecialCharacterExpression = /(?=.*[@$!%*?&])/

    const handleGoogleSignin = () => {

        googleSignin()
            .then((result) => {
                // console.log(result.user)
                setUser(result.user);
                navigate(`${location.state ? location.state : "/"}`)
                toast.success('successful login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    const handleSignup = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        console.log(name, email, image, password)
        if (!passwordLengthExpression.test(password)) {
            setErr('password must be least 6')
            return
        }
        else if (!passwordNumberExpression.test(password)) {
            setErr('password must be one number(0-9)')
            return
        }
        else if (!passwordUpperCaseExpression.test(password)) {
            setErr('password must be one uppercase letter')
            return
        }
        else if (!passwordLowerCaseExpression.test(password)) {
            setErr('password must be one lowercase letter')
            return
        }
        else if (!passwordSpecialCharacterExpression.test(password)) {
            setErr('password must be one special character(@ $ ! % * ? &)')
            return
        }
        event.target.reset();


        createUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : "/"}`)
                toast.success('Registration success');
            })
            .catch(error => {
                // console.log(error.message)

                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Please enter a valid email address.");
                } else if (error.code === "auth/operation-not-allowed") {
                    toast.error("This sign-in method is not enabled.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("Password should be at least 6 characters long.");
                } else if (error.code === "auth/user-disabled") {
                    toast.error("This user account has been disabled.");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("No user found with this email.");
                } else if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password. Please try again.");
                } else if (error.code === "auth/missing-password") {
                    toast.error("Please enter your password.");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid credentials provided.");
                } else if (error.code === "auth/account-exists-with-different-credential") {
                    toast.error("An account already exists with a different sign-in method.");
                } else if (error.code === "auth/credential-already-in-use") {
                    toast.error("This credential is already linked with another account.");
                } else if (error.code === "auth/popup-blocked") {
                    toast.error("Popup was blocked by the browser. Allow popups and try again.");
                } else if (error.code === "auth/popup-closed-by-user") {
                    toast.error("You closed the popup before completing the sign-in.");
                } else if (error.code === "auth/cancelled-popup-request") {
                    toast.error("Only one popup request is allowed at a time.");
                } else if (error.code === "auth/network-request-failed") {
                    toast.error("Network error. Please check your internet connection.");
                } else if (error.code === "auth/too-many-requests") {
                    toast.error("Too many attempts. Please try again later.");
                } else if (error.code === "auth/internal-error") {
                    toast.error("Internal error occurred. Please try again.");
                } else if (error.code === "auth/unauthorized-domain") {
                    toast.error("This domain is not authorized for OAuth operations.");
                } else if (error.code === "auth/invalid-verification-code") {
                    toast.error("The verification code is invalid.");
                } else if (error.code === "auth/invalid-verification-id") {
                    toast.error("Invalid verification ID.");
                } else if (error.code === "auth/missing-verification-code") {
                    toast.error("Verification code is missing.");
                } else if (error.code === "auth/missing-verification-id") {
                    toast.error("Verification ID is missing.");
                } else if (error.code === "auth/requires-recent-login") {
                    toast.error("Please reauthenticate and try again.");
                } else if (error.code === "auth/invalid-user-token") {
                    toast.error("Your session has expired. Please log in again.");
                } else if (error.code === "auth/expired-action-code") {
                    toast.error("This action code has expired.");
                } else if (error.code === "auth/invalid-action-code") {
                    toast.error("This action code is invalid.");
                } else if (error.code === "auth/missing-email") {
                    toast.error("Please enter your email address.");
                } else if (error.code === "auth/quota-exceeded") {
                    toast.error("Server quota exceeded. Please try again later.");
                } else if (error.code === "auth/app-not-authorized") {
                    toast.error("This app is not authorized to use Firebase Authentication.");
                } else if (error.code === "auth/timeout") {
                    toast.error("Request timed out. Please try again.");
                } else if (error.code === "auth/web-storage-unsupported") {
                    toast.error("Your browser does not support web storage.");
                } else if (error.code === "auth/missing-client-identifier") {
                    toast.error("Missing client identifier for OAuth.");
                } else {
                    toast.error(error.message || "An unexpected authentication error occurred.");
                }
            })
        // console.log('click to the ', name, image, email, password)
    }

    return (
        <div className='bg-[#F0FDF4] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className=" card bg-base-100 w-full mx-auto max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] font-semibold text-center mt-5'>Signup Now</h1>
                <div className="card-body">
                    <form onSubmit={handleSignup}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-black font-semibold">Name</label>
                            <input type="text" name='name' required className="input text-[#D9D9D9] w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Name" />
                            {/* image url */}

                            <label className="label text-black font-semibold">URL</label>
                            <input type="url" name='image' required className="input w-full text-[#D9D9D9]  outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Image Url" />
                            {/* Email */}
                            <label className="label text-black font-semibold">Email</label>
                            <input type="email" name='email' required className="input w-full text-[#D9D9D9] outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                            {/* password */}
                            <label className="label text-black font-semibold">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name='password' required className="input w-full text-[#747474] outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-xl absolute right-2 top-2 z-50">{
                                    showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                            </div>

                            {
                                err && <p className='text-red-500 text-sm mt-2'>{err}</p>
                            }
                            {/* button  */}
                            <button className="btn btn-primary font-semibold border-none hover:scale-105  mt-4"> Register</button>
                        </fieldset>
                    </form>

                    <div className='flex'>
                        <p className='text-xl'>----------------</p>
                        <p className='font-bold text-xl'>or</p>
                        <p className='text-xl'>----------------</p>
                    </div>

                    {/* Google */}
                    <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='mt-2'> Already Have An Account ? please  <Link className='cursor-pointer hover:underline text-red-500' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;