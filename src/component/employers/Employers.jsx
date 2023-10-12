import React from 'react'
import { Link } from 'react-router-dom'

const Employers = () => {
    return (
        <div className="student_alumni">
            <h2 className='fs-4 fw-bold text-white mb-2'>
                Employers & University Counselors
            </h2>

            <form action="">
                <div className='mb-3 p-2'>
                    <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                        Enter your work email to sign up*
                    </label>
                    <div className='input_field mb-2'>
                        <input type="text" className='w-100 bg-transparent border-white' placeholder='example@talengen.com' />
                    </div>
                </div>

                <div className='mb-3 p-2'>
                    <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                        Password*
                    </label>
                    <div className='input_field mb-2'>
                        <input type="text" className='w-100 bg-transparent border-white' />
                    </div>
                </div>

                <div className='mb-3 p-2'>
                    <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                        Confirm Password*
                    </label>
                    <div className='input_field mb-2'>
                        <input type="text" className='w-100 bg-transparent border-white' />
                    </div>
                </div>

                <div className='sign-up d-flex flex-wrap align-items-center justify-content-between'>
                    <button className='commn-btn text-white border-0 mb-4 mb-md-0'>
                        Sign Up
                    </button>
                    <Link to={"/signin"} className=' text-decoration-none text-white'>
                        Already have an account? Sign in
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Employers