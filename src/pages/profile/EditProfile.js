import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import profileSchema from "../../utils/validation/profileSchema";
import {store} from "../../redux/store";


const { dispatch } = store;
const handleEditProfile = (values) => {
  dispatch.user.editProfile(values);
};

const EditProfile = ({user}) => (
  <Formik
    initialValues={user}
    validationSchema={profileSchema}
    onSubmit={handleEditProfile}
    enableReinitialize
  >
    {({ handleSubmit, handleChange, values }) => (
      <>
        <h1>Edit Profile</h1>
        <input onChange={handleChange('firstName')} value={values.firstName} placeholder='First Name' />
        <input onChange={handleChange('lastName')} value={values.lastName} placeholder='last Name' />
        <input onChange={handleChange('email')} value={values.email} placeholder='email' />
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </>
    )
    }
  </Formik>
);

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(EditProfile);
