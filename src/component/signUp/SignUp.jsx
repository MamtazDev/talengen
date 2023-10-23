<<<<<<< HEAD
=======
import React, { useContext } from 'react';
>>>>>>> 908f3c6cfad9f508d68d3deca98bac3d5dca15f1
import { Image } from 'react-bootstrap';
import TeleGenLogo from '../../assets/telegen_logo.svg';
import './signUp.css';
import StudentAlumni from '../studentAlumni/StudentAlumni';
import Employers from '../employers/Employers';
import { useUsersQuery } from '../../store/api/userapi';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "../../store/redux/countslice"



const SignUp = () => {

    const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery()

    // console.log("data:", data)
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

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
            <StudentAlumni />
            <Employers />
        </div>
    )
}

export default SignUp