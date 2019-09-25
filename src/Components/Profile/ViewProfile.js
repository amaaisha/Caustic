import React from 'react';
import auth from "../Routes/protectedRoutes/auth";


const handleLogin = (props) => {
  auth.login(() => {
    props.history.push("/logIn")
  });
};
const ViewProfile = () => {
    return (
      <div>
        <h2>View Profile</h2>
        onClick = {handleLogin}
      </div>
    );
};

export default ViewProfile;