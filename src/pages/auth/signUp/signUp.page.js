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

export default SignUpPage;
