import React from 'react';
import { Formik } from 'formik';
import loginSchema from '../../../utils/validation/loginSchema'
import {store} from "../../../redux/store";

const {dispatch} = store;

const login = (values) => {
  dispatch.user.login(values);
};


const LogInPage = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={loginSchema}
    onSubmit={login}
  >
    {({ handleSubmit, handleChange }) => (
      <>
        <h1>Log In</h1>
        <input onChange={handleChange('email')}  placeholder='email' />
        <input onChange={handleChange('password')}  placeholder='password' />
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </>
    )
    }
  </Formik>
);

export default LogInPage;
