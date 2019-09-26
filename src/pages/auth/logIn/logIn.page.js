import React from 'react';
import auth from '../../routes/protectedRoutes/auth';

const LogInPage = (props) => (
  <div>
    <h2>Log in </h2>
    <button
      onClick={() => {
        auth.logout(() => {
          props.history.push('/Home');
        });
      }}
    >
          Logout
    </button>
  </div>
);

export default LogInPage;
