import React from 'react';
import auth from "../Routes/protectedRoutes/auth";


const handleLogin = (props) => {
  auth.login(() => {
    props.history.push("/logIn")
  });
};
const EditProfile = () => {
    return (
      <div>
        <h2>Edit Profile</h2>
        onClick = {handleLogin}
      </div>
    );
};

export default EditProfile;