import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './component/signUp/SignUp';
import SignIn from './component/signIn/SignIn';
import ResetPassword from './component/resetPassword/ResetPassword';
import StudentSignup from './component/studentSignup/StudentSignup';
import EmployesSignup from './component/emplyesSignup/EmployesSignup';
import VerifyEmail from './component/verifyEmail/VerifyEmail';
import VerifySuccess from './component/verifySuccess/VerifySuccess';
import UniversityCounselorSignUp from './component/universityCounselorSignUp/UniversityCounselorSignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
  },

  {
    path: '/signin',
    element: <SignIn />
  },

  {
    path: '/resetpassword',
    element: <ResetPassword />
  },

  {
    path: '/studentsignup',
    element: <StudentSignup />
  },

  {
    path: '/employesignup',
    element: <EmployesSignup />
  },

  {
    path: '/universitycounselorsignup',
    element: <UniversityCounselorSignUp />
  },

  {
    path: '/verifyemail',
    element: <VerifyEmail />
  },

  {
    path: '/verifysuccess',
    element: <VerifySuccess />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
