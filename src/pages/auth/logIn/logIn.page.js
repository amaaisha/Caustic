import React from 'react';
import {Link} from "react-router-dom";
import './login.styles.css';
import LoginForm from "./logInForm/loginForm";
import LoginButton from "./loginButton/loginButton";

const LogInPage = () => {
    return (
      <div className='logInContainer'>
        <div className='logInHeader'>
          <div className='account'>Account</div>
          <div className='logInHeaderLinks'>
            <Link to='/' className='logInHomeSpan'>Home</Link> / Account
          </div>
        </div>
        <div className='logInBody'>
          <LoginForm />
          <Link to='/' className='textLinks' ><p>Forgot your password?</p></Link>
          <LoginButton />
          <Link to='/' className='textLinks' ><p className='return'>Return to Store</p></Link>
        </div>
      </div>
    );
};

export default LogInPage;
