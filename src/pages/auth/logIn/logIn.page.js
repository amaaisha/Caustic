import React from 'react';
import {Link} from "react-router-dom";
import './login.styles.css';
import LoginForm from "./form2/loginForm";
import LoginButton from "./loginButton/loginButton";

const LogInPage = () => {
    return (
      <div className='container2'>
        <div className='header2'>
          <div className='account'>Account</div>
          <div className='home-create2'>
            <Link to='/' className='homeSpan2'>Home</Link> / Account
          </div>
        </div>
        <div className='body2'>
          <LoginForm />
          <Link to='/' className='body2link' ><p>Forgot your password?</p></Link>
          <LoginButton />
          <Link to='/' className='body2link' ><p className='return'>Return to Store</p></Link>
        </div>
      </div>
    );
};

export default LogInPage;
