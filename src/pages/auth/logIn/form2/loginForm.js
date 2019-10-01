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
        <form className='formContainer1'>
          <input onChange={handleChange('email')} type='email' placeholder='Email' />
          <input onChange={handleChange('password')} type='password' placeholder='Password' />
        </form>
        <Link to='/' className='body2link'><p>Forgot your password?</p></Link>
        <LoginButton onClick={handleSubmit} />
        <Link to='/' className='body2link'><p className='return'>Return to Store</p></Link>
      </>
    )}
  </Formik>
);

export default LoginForm;
