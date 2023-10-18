import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './store/store';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './component/signUp/SignUp';
import SignIn from './component/signIn/SignIn';
import ResetPassword from './component/resetPassword/ResetPassword';
import StudentSignup from './component/studentSignup/StudentSignup';
import EmployesSignup from './component/emplyesSignup/EmployesSignup';
import VerifyEmail from './component/verifyEmail/VerifyEmail';
import VerifySuccess from './component/verifySuccess/VerifySuccess';
import {  useState } from 'react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
  },

  {
    path: '/signin',
    element: <SignIn/>
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
    path: '/verifyemail',
    element: <VerifyEmail />
  },
  
  {
    path: '/verifysuccess',
    element: <VerifySuccess />
  },

])
 


function App() {


  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>

    
  )
}

export default App
