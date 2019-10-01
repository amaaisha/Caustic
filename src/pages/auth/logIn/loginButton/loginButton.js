import React from 'react';
import './loginButton.styles.css';

const LoginButton = ({ onClick }) => (
  <div onClick={onClick} className='bodyButton1'>
    <button>
			SIGN IN
    </button>
  </div>
);

export default LoginButton;
