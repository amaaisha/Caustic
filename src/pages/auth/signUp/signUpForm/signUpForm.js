import React from 'react';
import './signUpForm.styles.css';

const SignUpForm = () => {
	return (
		<form className='signUpFormContainer'>
			<input type='text' placeholder='First Name'/>
			<input type='text' placeholder='Last Name'/>
			<input type='email' placeholder='Email'/>
			<input type='password' placeholder='Password'/>
		</form>
	);
};

export default SignUpForm;
