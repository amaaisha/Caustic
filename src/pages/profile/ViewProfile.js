import React from 'react';
import { connect } from 'react-redux';


const ViewProfile = ({ user }) => (
  <>
    <h1>View Profile</h1>
    <p>
Full name:
      {user.firstName}

      {user.lastName}
    </p>
    <p>
email:
      {user.email}
    </p>
  </>
);

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(ViewProfile);
