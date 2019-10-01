import React from 'react';
import './signUp.styles.css';
import {Link} from "react-router-dom";
import Form from './form/form'
import Button from './button/button'

const SignUpPage = () => {
    return (
      <div className='container1'>
        <div className='header'>
          <div className='createAccount'>Create Account</div>
          <div className='home-create'>
            <Link to='/' className='homeSpan'>Home</Link> / Create Account
          </div>
        </div>
        <div className='body'>
          <Form />
          <Button />
        </div>
        <div className='footer'></div>
      </div>
    );
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

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </>
    )
    }
  </Formik>
);

export default SignUpPage;
