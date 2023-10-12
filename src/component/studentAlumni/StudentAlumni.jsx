import React from 'react'
import { Link } from 'react-router-dom'


const StudentAlumni = () => {
    return (
        <div className="student_alumni">
            <h2 className='fs-4 fw-bold text-white mb-2'>
                Students & Alumni
            </h2>

            <form action="">
                <div className='sign-up p-2'>
                    <label htmlFor="signup" className='text-white mb-2'>
                        Enter your student email to sign up*
                    </label>
                    <div className='input_field mb-2'>
                        <input type="text" className='w-100 bg-transparent border-white' placeholder='example@um.edu' />
                    </div>
                </div>

                <div className='sign-up d-flex flex-wrap align-items-center justify-content-between border-bottom pb-4 mb-4'>
                    <button className='commn-btn mb-4 mb-md-0'>
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

export default StudentAlumni