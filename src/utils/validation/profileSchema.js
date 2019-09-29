import * as yup from 'yup';

const profileSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  firstName: yup
    .string()
    .trim()
    .required(),
  lastName: yup
    .string()
    .trim()
    .required(),
  username: yup
    .string()
    .trim(),
  telephone: yup.number(),
});

export default profileSchema;
