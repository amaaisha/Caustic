import React from 'react';
import { Formik } from 'formik';
import signUpSchema from '../../../utils/validation/signUpSchema'
import {store} from '../../../redux/store'

const {dispatch} = store;

const signUp = (values) => {
  dispatch.user.signUp(values);
};

const SignUpPage = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }}
    validationSchema={signUpSchema}
    onSubmit={signUp}
  >
    {({ handleSubmit, handleChange }) => (
      <>
        <h1>Sign Up</h1>
        <input onChange={handleChange('firstName')}  placeholder='First Name' />
        <input onChange={handleChange('lastName')}  placeholder='last Name' />
        <input onChange={handleChange('email')}  placeholder='email' />
        <input onChange={handleChange('password')}  placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>
      </>
    )
    }
  </Formik>
);

export default SignUpPage;
