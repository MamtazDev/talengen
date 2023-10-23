import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';



const options2 = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
]


const Employers = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate()

    const singupHandler = () => {
        console.log("student email:",  email, password)
        localStorage.setItem('employe', JSON.stringify({email, password}))

        navigate('/employesignup');
         
    }


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
                        <input onChange={(e) => setEmail(e.target.value)}  id='email' type="email" className='w-100 bg-transparent border-white' required placeholder='example@talengen.com' value={email} />
                    </div>
                </div>

                

                <div className='input_field'>
                    <label htmlFor="password" className=' fs-6 text-white mb-2'>
                        Please choose your Category*
                    </label>
                    
                    <div className='input_field mb-2'>
                        {/* <input onChange={(e) => setPassword(e.target.value)}  id='password' type="password" className='w-100 bg-transparent border-white' /> */}
                        <Select placeholder="Select University" options={options2} theme={(theme) => ({
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

                <div className='input_field'>
                    <label htmlFor="password1" className=' fs-6 text-white mb-2'>
                        Password*
                    </label>
                    <div className='input_field mb-2'>
                        <input id='password1' type="password" className='w-100 bg-transparent border-white' />
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
                <button className='commn-btn text-white border-0 mb-4 mb-md-0' onClick={singupHandler}>
                    {/* <Link to={"/employesignup"} className='text-decoration-none text-white'> */}
                        Sign Up
                    {/* </Link> */}
                </button>
                <Link to={"/signin"} className='text-decoration-none text-white'>
                    Already have an account? Sign in
                </Link>
            </div>

        </div>
    )
}

export default Employers