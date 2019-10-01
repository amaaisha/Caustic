import categoryArray from '../../utils/mock'

const categoryState = {
  categories: categoryArray,
  products: [],
  category: {
    name: '',
    products: []
  },
  ascending: true
};

export const category = {
  state: { ...categoryState },
  reducers: {
    getProducts: (state) => {
      let productsArray = [];
      state.categories.map(({products}) => {
        productsArray = [...productsArray, ...products];
      });
      return{
        ...state,
        products: productsArray,
        category: {},
      }
    },
    getCategoryProducts: (state, payload) => {
      const category = state.categories.find( ({id}) => id === payload);
      return{
        ...state,
        category,
        products: category.products
      }
    },
    sortProducts: (state, payload) => {
      let products = state.products.slice(0);
      const ascending = state.ascending;
      products.sort((a, b) => {
        if(ascending){
          if ( a[payload] > b[payload] ){
            return -1;
          }
          if ( a[payload] < b[payload] ){
            return 1;
          }
          return 0;
        }else{
          if ( a[payload] < b[payload] ){
            return -1;
          }
          if ( a[payload] > b[payload] ){
            return 1;
          }
          return 0;
        }
        });

      return{
        ...state,
        ascending: !ascending,
        products
      }
    }
  },
  effects: dispatch => ({
  }),
};
