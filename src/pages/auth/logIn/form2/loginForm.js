import React from 'react';
import './loginForm.styles.css'

const LoginForm = () => {
	return (
		<form className='formContainer1'>
			<input type='email' placeholder='Email'/>
			<input type='password' placeholder='Password'/>
		</form>
	);
};

export default LoginForm;
