import React from 'react';
import { Link } from 'react-router-dom';
import './login.styles.css';
import LoginForm from './logInForm/loginForm';

const LogInPage = () => (
  <div className='logInContainer'>
    <div className='logInHeader'>
      <div className='account'>Account</div>
      <div className='logInHeaderLinks'>
        <Link to='/' className='logInHomeSpan'>Home</Link>

/ Account
      </div>
    </div>
    <div className='logInBody'>
      <LoginForm />
    </div>
  </div>
);

export default LogInPage;
