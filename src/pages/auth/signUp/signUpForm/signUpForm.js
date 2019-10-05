import React from 'react';
import { Formik } from 'formik';
import signUpSchema from '../../../../utils/validation/signUpSchema';
import { store } from '../../../../redux/store';
import './signUpForm.styles.css';
import SignUpButton from '../signUpButton/signUpButton';

const { dispatch } = store;

const signUp = (values) => {
  dispatch.user.signUp(values);
};

const SignUpForm = () => (
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
        <form className='signUpFormContainer'>
          <input
            onChange={handleChange('firstName')}
            type='text'
            placeholder='First Name'
          />
          <input
            onChange={handleChange('lastName')}
            type='text'
            placeholder='Last Name'
          />
          <input
            onChange={handleChange('email')}
            type='email'
            placeholder='Email'
          />
          <input
            onChange={handleChange('password')}
            type='password'
            placeholder='Password'
          />
        </form>
        <SignUpButton onClick={handleSubmit} />
      </>
    )}
  </Formik>
);

export default SignUpForm;
