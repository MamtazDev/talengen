import React from 'react'
import { Link } from 'react-router-dom'

const Employers = ({ email, isSubmitted, handleEmailChange, handleSignUpClick }) => {
    return (
        <div className="student_alumni">
            <h2 className='fs-4 fw-bold text-white mb-2'>
                Employers & University Counselors
            </h2>

            <div className='ps-2'>
                <div className='input_field'>
                    <label htmlFor="email" className=' fs-6 text-white mb-2'>
                        Enter your work email to sign up*
                    </label>
                    <div className='input_field mb-2'>
                        <input id='email' type="email" className='w-100 bg-transparent border-white' placeholder='example@talengen.com' value={email} onChange={handleEmailChange} required />
                    </div>
                </div>

                <div className='input_field'>
                    <label htmlFor="password" className=' fs-6 text-white mb-2'>
                        Password*
                    </label>
                    <div className='input_field mb-2'>
                        <input id='password' type="password" className='w-100 bg-transparent border-white' />
                    </div>
                </div>

                <div className='input_field'>
                    <label htmlFor="password2" className=' fs-6 text-white mb-2'>
                        Confirm Password*
                    </label>
                    <div className='input_field mb-2'>
                        <input id='password2' type="password" className='w-100 bg-transparent border-white' />
                    </div>
                </div>
            </div>
            
            <div className='sign-up d-flex flex-wrap align-items-center justify-content-between'>
                <button className='commn-btn text-white border-0 mb-4 mb-md-0'>
                    <Link to={"/employesignup"} className='text-decoration-none text-white'>
                        Sign Up
                    </Link>
                </button>
                <Link to={"/signin"} className='text-decoration-none text-white'>
                    Already have an account? Sign in
                </Link>
            </div>

        </div>
    )
}

export default Employers