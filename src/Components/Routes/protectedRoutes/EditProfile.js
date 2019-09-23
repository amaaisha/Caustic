import React from 'react';
import auth from "../../auth";
const EditProfile = (props) => {
    return (
      <div>
        <h2>Edit Profile</h2>
        <button
          onClick={() => {
            auth.login(() => {
              props.history.push("/LogIn");
            });
          }}
        >
          Log In
        </button>
      </div>
    );
};

export default EditProfile;