import * as yup from 'yup';

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
});

export default forgotPasswordSchema;
