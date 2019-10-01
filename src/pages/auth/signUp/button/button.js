import React from 'react';
import './button.styles.css';

const Button = () => {
	return (
		<div className='bodyButton'>
			{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
			<button>
				Create Account
			</button>
		</div>
	)
};

export default Button;
