import React from 'react';
import './form.styles.css';

const Form = () => {
	return (
		<form className='formContainer'>
			<input type='text' placeholder='First Name'/>
			<input type='text' placeholder='Last Name'/>
			<input type='email' placeholder='Email'/>
			<input type='password' placeholder='Password'/>
		</form>
	);
};

export default Form;
