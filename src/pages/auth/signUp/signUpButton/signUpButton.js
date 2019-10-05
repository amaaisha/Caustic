import React from 'react';
import './signUpButton.styles.css';

const SignUpButton = ({ onClick }) => (
  <div onClick={onClick} className='createAccountButton'>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button>
				Create Account
    </button>
  </div>
);

export default SignUpButton;
