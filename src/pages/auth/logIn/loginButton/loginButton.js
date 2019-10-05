import React from 'react';
import './loginButton.styles.css';

const LoginButton = () => {
	return (
		<div className='loginButton'>
			{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
			<button>
				SIGN IN
			</button>
		</div>
	)
};

export default LoginButton;
