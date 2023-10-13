import React from 'react'
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
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
                                Enter your Student Email*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' placeholder='example@um.edu' />
                            </div>
                            <div className='input_field mb-2'>
                                <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                    Password*
                                </label>
                                <div className='input_field mb-2'>
                                    <input type="text" className='w-100 bg-transparent border-white' />
                                </div>
                            </div>
                        </div>

                        <div className='sign-up d-flex flex-wrap align-items-center justify-content-between border-bottom pb-4 mb-4'>
                            <button className='commn-btn mb-4 mb-md-0'>
                                Sign In
                            </button>
                            <Link to={"/resetpassword"} className='text-decoration-none text-white'>
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="student_alumni">
                    <h2 className='fs-4 fw-bold text-white mb-2'>
                        Employers & University Counselors
                    </h2>

                    <div>
                        <div className='mb-3 p-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Enter your Work Email*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' placeholder='example@talengen.com' />
                            </div>
                        </div>

                        <div className='mb-3 p-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Enter your Password*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='sign-up d-flex flex-wrap align-items-center justify-content-between'>
                            <button className='commn-btn text-white border-0 mb-4 mb-md-0'>
                                Sign In
                            </button>
                            <Link to={"/resetpassword"} className='text-decoration-none text-white'>
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn