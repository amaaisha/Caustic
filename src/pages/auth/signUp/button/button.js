import React from 'react';
import './button.styles.css';

const Button = ({ onClick }) => (
  <div onClick={onClick} className='bodyButton'>
    <button>Create Account</button>
  </div>
);

export default Button;
