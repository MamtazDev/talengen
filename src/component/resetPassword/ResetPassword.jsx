import React, { useState } from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [resetPassword, setResetPassword] = useState(false);
    const handleResetPassword = () => {
        setResetPassword(true);
    };

    return (
        <div className={resetPassword ? 'reset_wrapper align-items-center' : 'reset_wrapper d-flex align-items-center'}>
            <div className='resent-content'>
                {resetPassword ? (
                    <div style={{ marginTop: '207px' }}>
                        <div className='text-center'>
                            <h2 className='fs-3 fw-semibold text-white mb-4'>
                                Reset your Password
                            </h2>
                            <p className='fs-6 fw-semibold text-white'>
                                Enter a new password for account: example@gmail.com
                            </p>
                        </div>

                        <div className='sign-up ps-2'>
                            <label htmlFor="newPassword" className='text-white mb-2'>
                                Please enter your new password*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='newPassword' type="password" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='sign-up ps-2'>
                            <label htmlFor="confirmPassword" className='text-white mb-2'>
                                Please confirm your new password*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='confirmPassword' type="password" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='text-center'>
                            <h2 className='fs-3 fw-semibold text-white mb-4'>
                                Reset your Password
                            </h2>
                            <p className='fs-6 fw-semibold text-white'>
                                Please provide the email address that you used when you signed up for your account.
                                If you forgot your email, please <Link className='text-white'>contact us</Link>.
                            </p>
                        </div>

                        <div className='sign-up p-2'>
                            <label htmlFor="emailAddress" className='text-white mb-2'>
                                Email Address*
                            </label>
                            <div className='input_field mb-2'>
                                <input id='emailAddress' type="text" className='w-100 bg-transparent border-white' placeholder='example@gmail.com' />
                            </div>
                        </div>
                    </>
                )}

                <div>
                    <div className='text-center'>
                        <button className='commn-btn mb-4 mb-md-0' onClick={handleResetPassword}>
                            RESET PASSWORD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
