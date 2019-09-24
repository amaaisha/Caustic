import React from 'react';
import auth from "../Routes/protectedRoutes/auth";

const LogIn = (props) => {
    return (
      <div>
        <h2>Log in </h2>
        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/Home");
            });
          }}
        >
          Logout
        </button>
      </div>
    );
};

export default LogIn;