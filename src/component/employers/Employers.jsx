import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';

const Employers = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [category, setCategory] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleCategoryChange = (selectedOption) => {
        setCategory(selectedOption);
        setSelectedComponent(null); // Reset the selected component when category changes
    };

    const handleSignUpClick = () => {
        if (isValidInput()) {
            setIsSubmitted(true);
            // Render the selected component based on the chosen category
            if (category) {
                setSelectedComponent(
                    category.value === 'employer' ? history('/employesignup') : history('/universitysignup')
                );
            }
        }
    };

    const isValidInput = () => {
        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(email)) {
            alert("Please enter correct email");
            return false;
        }

        if (!password) {
            setPasswordError("Password is required");
            return false;
        }

        if (password !== password2) {
            setPasswordError("Passwords do not match");
            return false;
        }
        return true;
    };

    const employeCategory = [
        { value: 'employersignup', label: 'Employer' },
        { value: 'universitysignup', label: 'University Counselors' },
    ]


    const singupHandler = () => {
        console.log("student email:",  email, password)
        localStorage.setItem('employe', JSON.stringify({email, password}))

        navigate('/employesignup');
         
    }

    return (
        <div className="student_alumni">
            <h2 className="fs-4 fw-bold text-white mb-2">Employers & University Counselors</h2>

            <div className="ps-2">
                <div className="input_field">
                    <label htmlFor="email" className="fs-6 text-white">
                        Enter your work email to sign up*
                    </label>
                    <div className="input_field mb-2">
                        <input
                            id="email"
                            type="email"
                            className="w-100 bg-transparent border-white"
                            placeholder="example@talengen.com"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                </div>

                <div className='input_field'>
                    <label htmlFor="signup" className=' fs-6 text-white'>
                        Please choose your Category*
                    </label>
                    <div className='input_field mb-2'>
                        <Select
                            placeholder="Select Category"
                            options={employeCategory}
                            onChange={handleCategoryChange}
                            value={category}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#FF4700',
                                    primary: 'black',
                                },
                            })} styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: 'transparant',
                                    boxShadow: 'white'
                                }),

                                dropdownIndicator: (baseStyles, state) => ({
                                    ...baseStyles,
                                    color: 'white'
                                }),

                                indicatorSeparator: (baseStyles, state) => ({
                                    ...baseStyles,
                                    display: 'none'
                                }),

                                menu: (baseStyles, state) => ({
                                    ...baseStyles,
                                    backgroundColor: '#9B1C19',

                                }),

                                menuList: (baseStyles, state) => ({

                                    ...baseStyles,
                                    color: '#fff',
                                }),

                                input: (baseStyles, state) => ({
                                    ...baseStyles,
                                    border: 'white',
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    margin: 0
                                }),

                                singleValue: (baseStyles, state) => ({
                                    ...baseStyles,
                                    color: 'white'
                                }),

                                placeholder: (baseStyles, state) => ({
                                    ...baseStyles,
                                    color: '#ffffff66'
                                })
                            }} />
                    </div>
                </div>

                <div className="input_field">
                    <label htmlFor="password" className="fs-6 text-white">
                        Password*
                    </label>
                    <div className="input_field mb-2">
                        <input
                            id="password"
                            type="password"
                            className="w-100 bg-transparent border-white"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {passwordError && <div style={{ color: '#FF4700' }}>{passwordError}</div>}
                </div>

                <div className="input_field">
                    <label htmlFor="password2" className="fs-6 text-white">
                        Confirm Password*
                    </label>
                    <div className="input_field mb-2">
                        <input
                            id="password2"
                            type="password"
                            className="w-100 bg-transparent border-white"
                            value={password2}
                            onChange={handlePassword2Change}
                        />
                    </div>
                </div>
            </div>

            <div className="sign-up d-flex flex-wrap align-items-center justify-content-between">
                <button
                    className="commn-btn text-white border-0 mb-4 mb-md-0"
                    onClick={handleSignUpClick}
                    disabled={isSubmitted}
                >
                    Sign Up
                </button>
                <Link to="/signin" className="text-decoration-none text-white">
                    Already have an account? Sign in
                </Link>
            </div>
        </div>
    );
};

export default Employers;
