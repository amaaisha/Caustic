import React from 'react';
import './form.styles.css';
import { Formik } from 'formik';
import signUpSchema from '../../../../utils/validation/signUpSchema';
import { store } from '../../../../redux/store';
import Button from '../button/button';

const { dispatch } = store;
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
const signUp = (values) => {
  dispatch.user.signUp(values);
};

const Form = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }}
    validationSchema={signUpSchema}
    onSubmit={signUp}
  >
    {({ handleSubmit, handleChange }) => (
      <>
        <form className='formContainer'>
          <input
            onChange={handleChange('firstName')}
            type='text'
            placeholder='First Name'
          />
          <input
            onChange={handleChange('lastName')}
            type='text'
            placeholder='Last Name'
          />
          <input
            onChange={handleChange('email')}
            type='email'
            placeholder='Email'
          />
          <input
            onChange={handleChange('password')}
            type='password'
            placeholder='Password'
          />
        </form>
        <Button onClick={handleSubmit} />
      </>
    )}
  </Formik>
);

export default SignUpForm;
