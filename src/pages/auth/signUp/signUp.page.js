import React from 'react';
import './signUp.styles.css';
import { Link } from 'react-router-dom';
import Form from './form/form';

const SignUpPage = () => (
  <div className='container1'>
    <div className='header'>
      <div className='createAccount'>Create Account</div>
      <div className='home-create'>
        <Link to='/' className='homeSpan'>Home</Link>

/ Create Account
      </div>
    </div>
    <div className='body'>
      <Form />
    </div>
    <div className='footer' />
  </div>
);

export default SignUpPage;
