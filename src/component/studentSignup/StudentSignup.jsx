import React from 'react'
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const StudentSignup = () => {
    return (
        <div className='main_wrapper'>
            <div className="section-head text-center mt-3 mb-5">
                <Image src={TeleGenLogo} alt='logo' />
                <h2 className='fs-2 fw-semibold text-white mb-4'>
                    Sign In TalenGen
                </h2>

                <p className='fs-4 fw-semibold text-white'>
                    Get Ready to Empower your Recruiting Journey
                </p>
            </div>

            <div className="student_alumni">
                <h2 className='fs-4 fw-bold text-white mb-2'>
                    Students & Alumni
                </h2>

                <div>
                    <div className='sign-up p-2'>
                        <label htmlFor="signup" className='text-white mb-2'>
                            Enter your Preferred Name*
                        </label>
                        <div className='input_field mb-2'>
                            <input type="text" className='w-100 bg-transparent border-white' />
                        </div>
                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Enter Password*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Confirm Password*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Current/Past Institution*
                            </label>
                            <div className='input_field mb-2'>
                                <select className='w-100 bg-transparent border-white' name="" id="">
                                    <option value="">Select University</option>
                                </select>
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Graduation Class*
                            </label>
                            <div className='input_field mb-2'>
                                <select className='w-100 bg-transparent border-white' name="" id="">
                                    <option value="">Select Graduation Year</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4'>
                        <button className='commn-btn mb-4 mb-md-0'>
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSignup