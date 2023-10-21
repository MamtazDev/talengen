import React from 'react'
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UniversityCounselorSignUp = () => {
    return (
        <div className='main_wrapper'>
            <div className="section-head text-center mt-3 mb-5">
                <Image src={TeleGenLogo} alt='logo' />
                <h2 className='fs-2 fw-semibold text-white mb-4'>
                    Sign In TalenGen
                </h2>

                <p className='fs-4 fw-semibold text-white'>
                    Join TalenGen Now
                </p>
            </div>

            <div className="student_alumni">
                <h2 className='fs-4 fw-bold text-white mb-2'>
                    University Counselors
                </h2>

                <div>
                    <div className='sign-up p-2'>
                        <label htmlFor="preferredName" className='text-white'>
                            Enter your Preferred Name*
                        </label>
                        <div className='input_field mb-2'>
                            <input id='preferredName' type="text" className='w-100 bg-transparent border-white' />
                        </div>
                        <div className='input_field mb-2'>
                            <label htmlFor="currentCompany" className=' fs-6 text-white'>
                                Enter your Current Institution Name*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='currentCompany' type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="currentPosition" className=' fs-6 text-white'>
                                Enter your Current Position*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='currentPosition' type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="preferredContact" className=' fs-6 text-white'>
                                Enter your Preferred Contact Number*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='preferredContact' type="number" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="registrationNumber" className=' fs-6 text-white'>
                                Enter your Institution Registration Number*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='registrationNumber' type="number" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>


                    </div>

                    <div className='sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4'>
                        <button className='commn-btn mb-4 mb-md-0'>
                            <Link to={'/verifyemail'} className='text-decoration-none text-white'>
                                Sign Up
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniversityCounselorSignUp