import React from 'react'
import TeleGenLogo from '../../assets/telegen_logo.svg';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Select from 'react-select'

const options = [
    { value: '(UM)', label: 'University Malaya(UM)' },
    { value: '(USM)', label: 'Universiti Sains Malaysia(USM)' },
    { value: '(UKM)', label: 'Universiti Kebangsaan Malaysia(UKM)' },
    { value: '(UPM)', label: 'Universiti Putra Malaysia(UPM)' },
    { value: '(UTM)', label: 'Universiti Teknologi Malaysia(UTM)' },
    { value: '(UiTM)', label: 'Universiti Teknologi MARA(UiTM)' },
    { value: '(UIAM)', label: 'Universiti Islam Antarabangsa Malaysia(UIAM)' },
    { value: '(UUM)', label: 'Universiti Utara Malaysia(UUM)' },
    { value: '(UNIMAS)', label: 'Universiti Malaysia Sarawak(UNIMAS)' },
    { value: '(UMS)', label: 'Universiti Malaysia Sabah(UMS)' },
    { value: '(UPSI)', label: 'Universiti Pendidikan Sultan Idris(UPSI)' },
    { value: '(USIM)', label: 'Universiti Sains Islam Malaysia(USIM)' },
    { value: '(UMT)', label: 'Universiti Malaysia Terengganu(UMT)' },
    { value: '(UTHM)', label: 'Universiti Tun Hussein Onn Malaysia(UTHM)' },
    { value: '(UTeM)', label: 'Universiti Teknikal Malaysia Melaka(UTeM)' },
    { value: '(MMU)', label: 'Multimedia University(MMU)' },
    { value: '(UNITEN)', label: 'Cyberjaya Universiti Tenaga Nasional(UNITEN)' },
    { value: '(UniRAZAK)', label: 'Universiti Tun Abdul Razak(UniRAZAK)' },
    { value: '(UTP)', label: 'Universiti Teknologi Petronas(UTP)' },
    { value: '(IMU)', label: 'International Medical University(IMU)' },
    { value: '(UNISEL)', label: 'Universiti Selangor(UNISEL)' },
    { value: '(OUM)', label: 'Open University Malaysia(OUM)' },
    { value: '(MUST)', label: 'Malaysia University of Science & Technology(MUST)' },
    { value: '(UTAR)', label: 'University Universiti Tunku Abdul Rahman(UTAR)' },
    { value: '(UniKL)', label: 'Universiti Kuala Lumpur(UniKL)' },
    { value: '(WOU)', label: 'Wawasan Open University(WOU)' },
    { value: '(LUCT)', label: 'Limkokwing University of Creative Technology(LUCT)' },
    { value: '(MSU)', label: 'Management and Science University(MSU)' },
    { value: '(AeU)', label: 'Asia e University(AeU)' },
    { value: '(UCSI)', label: 'UCSI University(UCSI)' },
    { value: '(QIU)', label: 'Quest International University(QIU)' },
    { value: '(IIU)', label: 'INTI International University(IIU)' },
    { value: '(TU)', label: 'Taylor’s University(TU)' },
    { value: '(SU)', label: 'Sunway University(SU)' },
    { value: '(MIU)', label: 'Manipal International University(MIU)' },
    { value: '(PU)', label: 'Perdana University(PU)' },
    { value: '(HU)', label: 'HELP University(HU)' },
    { value: '(UIU)', label: 'UNITAR International University(UIU)' },
    { value: '(RUI)', label: 'Raffles University Iskandar(RUI)' },
    { value: '(MISI)', label: 'Malaysia Institute of Supply Chain Innovation(MISI)' },
    { value: '(NU)', label: 'Nilai University(NU)' },
    { value: '(SIU)', label: 'SEGi University(SIU)' },
    { value: '(APU)', label: 'Asia Pacific University of Technology and Innovation(APU)' }
]


const StudentSignup = () => {
    return (
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
                            Enter your Preferred Name*
                        </label>
                        <div className='input_field mb-2'>
                            <input type="text" className='w-100 bg-transparent border-white' />
                        </div>
                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Enter Password*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Confirm Password*
                            </label>
                            <div className='input_field mb-2'>
                                <input type="text" className='w-100 bg-transparent border-white' />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Current/Past Institution*
                            </label>
                            <div className='input_field mb-2'>
                                {/* <select className='w-100 bg-transparent border-white' name="" id="">
                                    <option value="">Select University</option>
                                    <option value="">
                                        University Malaya (UM)
                                    </option>
                                </select> */}
                                <Select options={options} styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        backgroundColor: 'transparant',
                                        color: state.isSelected ? 'white' : 'white'
                                    }),
                                }} />
                            </div>
                        </div>

                        <div className='input_field mb-2'>
                            <label htmlFor="signup" className=' fs-6 text-white mb-2'>
                                Graduation Class*
                            </label>
                            <div className='input_field mb-2'>
                                <select className='w-100 bg-transparent border-white' name="" id="">
                                    <option value="">Select Graduation Year</option>
                                </select>
                                {/* <Select options={options} /> */}
                            </div>
                        </div>
                    </div>

                    <div className='sign-up d-flex flex-wrap align-items-center justify-content-between pb-4 mb-4'>
                        <button className='commn-btn mb-4 mb-md-0'>
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSignup