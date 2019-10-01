import React from 'react';
import { Link } from 'react-router-dom';
import './login.styles.css';
import LoginForm from './form2/loginForm';

const LogInPage = () => (
  <div className='container2'>
    <div className='header2'>
      <div className='account'>Account</div>
      <div className='home-create2'>
        <Link to='/' className='homeSpan2'>Home</Link>

/ Account
      </div>
    </div>
    <div className='body2'>
      <LoginForm />
    </div>
  </div>
);

export default LogInPage;
