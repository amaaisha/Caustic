import categoryArray from '../../utils/mock'

const categoryState = {
  categories: categoryArray,
  products: [],
  category: {
    name: '',
    products: []
  },
  ascending: true,
  query: '',
  results: {},
  loading: false,
  message: '',
  totalResults: 0,
  totalPages: 0,
  currentPageNo: 0
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
      const products = state.products.slice(0);
      const {ascending} = state;
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
  // handleSearch: (state, payload) => {
  //
  //   };
  //
  //   return{
  //     ...state,
  //     products
  //   }
  // },
  effects: dispatch => ({
  }),
};
