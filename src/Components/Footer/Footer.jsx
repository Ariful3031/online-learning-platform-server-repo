import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
import logoImg from '../../assets/online logo.png'

const Footer = () => {
    return (
        <div>
            <footer className=" grid grid-cols-6 gap-5 footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav className='col-span-2'>
                    <img className='w-20 h-20 rounded-full' src={logoImg} alt="" />
                    <p>
                        Your trusted marketplace for authentic local <br /> products. Discover the best deals from across <br /> Bangladesh.
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to='/courses' className="link link-hover">All Courses</Link>
                    <Link to='/dashboard' className="link link-hover">Dashboard</Link>
                    <Link to='/login' className="link link-hover">Login</Link>
                    <Link to='/register' className="link link-hover">Register</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Multimedia</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex items-center gap-1'>
                        <FaSquareXTwitter />
                        <a className="link link-hover">Twitter</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaInstagramSquare />
                        <a className="link link-hover">Instagram</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaFacebook />
                        <a className="link link-hover">Facebook</a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaGithub />
                        <a className="link link-hover">GitHub</a>
                    </div>



                </nav>
                <nav>
                    <h6 className="footer-title">Contact & Support</h6>
                    <a className="link link-hover">support@Smartdeals.com</a>
                    <a className="link link-hover">+880 123 456 789</a>
                    <a className="link link-hover">123 Commerce Street, Dhaka, Bangladesh</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content justify-center items-center p-4">


                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>


            </footer>
        </div>
    );
};

export default Footer;