import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('First name is required'),
  lastName: yup
    .string()
    .trim()
    .required('Last name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email name is required'),
  password: yup.string().required('Password is required'),
});

export default signUpSchema;
