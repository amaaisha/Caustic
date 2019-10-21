import * as yup from 'yup';

const createProductSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Product name is required'),
  price: yup
    .number()
    .required('Price is required'),
  stock: yup
    .number(),
  description: yup
    .string(),
});

export default createProductSchema;
