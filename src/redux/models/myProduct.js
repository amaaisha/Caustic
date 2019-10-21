import { toast } from 'react-toastify';
import productApi from '../../api/productApi';


const productState = {
  product: {
    name: '',
    price: 0,
    stock: 0,
    description: '',
    picture: null,
  },
  products: [],
};


export const myProduct = {
  state: { ...productState },
  reducers: {
    setProductSuccess: (state, payload) => ({
      ...state,
      product: payload,
      products: [payload, ...state.products],
    }),
  },
  effects: (dispatch) => ({
    createProduct: async (payload) => {
      console.log('product', payload);
      const response = await productApi.createProduct(payload);
      toast.success('Product Created');
      if (!response.success) {
        toast.dismiss();
        toast.error(response.message);
        return response.message;
      }
      dispatch.product.setProductSuccess(response.result.product);
      dispatch.user.loginSuccess(response.result.user);
    },

  }),
};
