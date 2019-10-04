import React from 'react';
import './signUp.styles.css';
import {Link} from "react-router-dom";
import SignUpForm from './signUpForm/signUpForm'
import SignUpButton from './signUpButton/signUpButton'

const SignUpPage = () => {
    return (
      <div className='signUpContainer'>
        <div className='signUpHeader'>
          <div className='createAccount'>Create Account</div>
          <div className='signUpHeaderLinks'>
            <Link to='/' className='homeSpan'>Home</Link> / Create Account
          </div>
        </div>
        <div className='signUpBody'>
          <SignUpForm />
          <SignUpButton />
        </div>
        <div className='signUpFooter' />
      </div>
    );
};

export default SignUpPage;
