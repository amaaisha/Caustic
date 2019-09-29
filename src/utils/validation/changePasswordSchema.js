import * as yup from 'yup';

const changePasswordSchema = yup.object().shape({
  password: yup.string().required('Current Password is required'),
  newPassword: yup.string().required('New Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords do not match')
    .required('Please confirm your password'),
});

export default changePasswordSchema;
