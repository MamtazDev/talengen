<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';

=======
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
const employeCategory = [
  { value: "employer", label: "Employer" },
  { value: "universityCounselors", label: "University Counselors" },
];
>>>>>>> 0e61310ebb6ea9fbb93c1dd2ad365853b3a4f0ed


const options2 = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
]


const Employers = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState({
    email: "",
    password: "",
  });

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption.label);
    setEmployeeDetails((prevEmployeeDetails) => ({
      ...prevEmployeeDetails,
      role: selectedOption.label,
    }));
  };

  const singupHandler = (e) => {
    e.preventDefault();
    if (category === "Employer") {
      localStorage.setItem("employee", JSON.stringify(employeeDetails));

      navigate("/employesignup");
    } else if (category === "University Counselors") {
      localStorage.setItem("University", JSON.stringify(employeeDetails));

      navigate("/universitycounselorsignup");
    }
  };

  return (
    <div className="student_alumni">
      <h2 className="fs-4 fw-bold text-white mb-2">
        Employers & University Counselors
      </h2>

<<<<<<< HEAD
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

=======
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
              // value={email}
              // onChange={handleEmailChange}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  email: e.target.value,
                })
              }
              required
            />
          </div>
>>>>>>> 0e61310ebb6ea9fbb93c1dd2ad365853b3a4f0ed
        </div>

        <div className="input_field">
          <label htmlFor="signup" className=" fs-6 text-white">
            Please choose your Category*
          </label>
          <div className="input_field mb-2">
            <Select
              placeholder="Select Category"
              options={employeCategory}
              // onChange={handleCategoryChange}
              // value={category}
              onChange={(selectedOption) =>
                handleCategoryChange(selectedOption)
              }
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#FF4700",
                  primary: "black",
                },
              })}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "transparant",
                  boxShadow: "white",
                }),

                dropdownIndicator: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),

                indicatorSeparator: (baseStyles) => ({
                  ...baseStyles,
                  display: "none",
                }),

                menu: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: "#9B1C19",
                }),

                menuList: (baseStyles) => ({
                  ...baseStyles,
                  color: "#fff",
                }),

                input: (baseStyles) => ({
                  ...baseStyles,
                  border: "white",
                  paddingTop: 0,
                  paddingBottom: 0,
                  margin: 0,
                }),

                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: "white",
                }),

                placeholder: (baseStyles) => ({
                  ...baseStyles,
                  color: "#ffffff66",
                }),
              }}
            />
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
              // value={password}
              // onChange={handlePasswordChange}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  password: e.target.value,
                })
              }
            />
          </div>
          {/* {passwordError && (
            <div style={{ color: "#FF4700" }}>{passwordError}</div>
          )} */}
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
              // value={password2}
              // onChange={handlePassword2Change}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={(e) =>
                setEmployeeDetails({
                  ...employeeDetails,
                  password: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="sign-up d-flex flex-wrap align-items-center justify-content-between">
        <button
          className="commn-btn text-white border-0 mb-4 mb-md-0"
          onClick={singupHandler}
          // disabled={isSubmitted}
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
