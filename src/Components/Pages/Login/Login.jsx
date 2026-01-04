import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { IoMdEyeOff } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { loginUser, googleSignin, setUser } = useContext(AuthContext);
    const [err, setErr] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const passwordLengthExpression = /^.{6,}$/
    const passwordNumberExpression = /(?=.*\d)/
    const passwordUpperCaseExpression = /(?=.*[A-Z])/
    const passwordLowerCaseExpression = /(?=.*[a-z])/
    const passwordSpecialCharacterExpression = /(?=.*[@$!%*?&])/

    const emailRef = useRef();

    const handleGoogleSignin = () => {

        googleSignin()
            .then((result) => {
                // console.log(result.user)
                setUser(result.user)
                navigate(`${location.state ? location.state : "/"}`)
                toast.success('success login')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // demo user login handle
    const handleDemoLogin = () => {
        const demoEmail = "user@user.com";
        const demoPassword = "@Password1";

        loginUser(demoEmail, demoPassword)
            .then(result => {
                // console.log(result.user)
                toast.success("login success")
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch(error => {
                // console.log(error.message)
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Please enter a valid email address.");
                } else if (error.code === "auth/user-disabled") {
                    toast.error("This account has been disabled.");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("No account found with this email.");
                } else if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("Password is too weak. Use at least 6 characters, with numbers and symbols.");
                } else if (error.code === "auth/too-many-requests") {
                    toast.error("Too many attempts. Try again later.");
                } else if (error.code === "auth/operation-not-allowed") {
                    toast.error("This sign-in method is not enabled.");
                } else if (error.code === "auth/requires-recent-login") {
                    toast.error("Please login again to perform this action.");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid authentication credential.");
                } else if (error.code === "auth/credential-already-in-use") {
                    toast.error("This credential is already linked to another account.");
                } else if (error.code === "auth/account-exists-with-different-credential") {
                    toast.error("An account with this email exists using a different sign-in method.");
                } else if (error.code === "auth/popup-closed-by-user") {
                    toast.error("Authentication popup closed before completion.");
                } else if (error.code === "auth/network-request-failed") {
                    toast.error("Network error. Check your internet connection.");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            })


    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log('click login', email, password)

        if (!passwordSpecialCharacterExpression.test(password)) {
            setErr('password must be one special character(@ $ ! % * ? &)')
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
        else if (!passwordNumberExpression.test(password)) {
            setErr('password must be one number(0-9)')
            return
        }

        else if (!passwordLengthExpression.test(password)) {
            setErr('password must be least 6')
            return
        }
        event.target.reset();

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("login success")
                event.target.reset();
                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch(error => {
                // console.log(error.message)
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Please enter a valid email address.");
                } else if (error.code === "auth/user-disabled") {
                    toast.error("This account has been disabled.");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("No account found with this email.");
                } else if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("Password is too weak. Use at least 6 characters, with numbers and symbols.");
                } else if (error.code === "auth/too-many-requests") {
                    toast.error("Too many attempts. Try again later.");
                } else if (error.code === "auth/operation-not-allowed") {
                    toast.error("This sign-in method is not enabled.");
                } else if (error.code === "auth/requires-recent-login") {
                    toast.error("Please login again to perform this action.");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid authentication credential.");
                } else if (error.code === "auth/credential-already-in-use") {
                    toast.error("This credential is already linked to another account.");
                } else if (error.code === "auth/account-exists-with-different-credential") {
                    toast.error("An account with this email exists using a different sign-in method.");
                } else if (error.code === "auth/popup-closed-by-user") {
                    toast.error("Authentication popup closed before completion.");
                } else if (error.code === "auth/network-request-failed") {
                    toast.error("Network error. Check your internet connection.");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            })

    }

    const handleForgotPassword = () => {

        const email = emailRef.current.value

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('please check your email')

            })
            .catch((error) => {
                console.log(error)
            })
        // console.log(email)
    }

    return (
        <div className='bg-[#FFF0E1] w-full mx-auto h-screen my-auto flex justify-center items-center'>
            <div className="card bg-base-100 w-full mx-auto  max-w-md shrink-0 shadow-2xl">
                <h1 className='text-2xl text-[#15803D] dark:text-white font-semibold text-center mt-5'>Login Now</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            {/* Email */}
                            <label className="label text-black dark:text-white font-semibold">Email</label>
                            <input type="email" ref={emailRef} name='email' required className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="Email" />

                            {/* password */}
                            <label className="label text-black dark:text-white font-semibold">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} name='password' required className="input w-full outline-none focus:ring-2 focus:ring-[#02A53B] focus:border-none " placeholder="password" />

                                <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-xl absolute right-2 top-2 z-50">{
                                    showPassword ? <IoMdEyeOff /> : <FaEye />}</button>
                            </div>

                            {
                                err && <p className='text-red-500 text-sm mt-2'>{err}</p>
                            }

                            {/* forgot password */}
                            <div onClick={handleForgotPassword} className='mt-3'>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            {/* button  */}
                            <button className="btn btn-primary font-semibold border-none hover:scale-105 mt-4">Login</button>
                        </fieldset>
                    </form>
                    {/* Demo User Button */}
                    <button
                        type="button"
                        onClick={handleDemoLogin}
                        className="btn btn-primary"
                    >
                        Login as Demo User
                    </button>

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

                    <p className='mt-2'> Dont’t Have An Account ? please <Link className='cursor-pointer hover:underline text-red-500' to='/register'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;