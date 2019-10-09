import React from 'react';
import { Formik } from 'formik';
import './loginForm.styles.css';
import { Link } from 'react-router-dom';
import { store } from '../../../../redux/store';
import loginSchema from '../../../../utils/validation/loginSchema';
import LoginButton from '../loginButton/loginButton';

const { dispatch } = store;

const login = (values) => {
  dispatch.user.login(values);
};

const LoginForm = () => (
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
        <form className='logInFormContainer'>
          <input onChange={handleChange('email')} type='email' placeholder='Email' />
          <input onChange={handleChange('password')} type='password' placeholder='Password' />
        </form>
        <Link to='/' className='textLinks'><p>Forgot your password?</p></Link>
        <LoginButton onClick={handleSubmit} />
        <Link to='/' className='textLinks'><p className='return'>Return to Store</p></Link>
      </>
    )}
  </Formik>
);

export default LoginForm;
