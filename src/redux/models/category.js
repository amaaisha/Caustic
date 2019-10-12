import categoryArray from '../../utils/mock';

const categoryState = {
  categories: categoryArray,
  products: [],
  searchedProducts: [],
  product: [],
  category: {
    name: '',
    products: [],
  },
  ascending: true,
  query: '',
};

// eslint-disable-next-line import/prefer-default-export
export const category = {
  state: { ...categoryState },
  reducers: {
    getProducts: (state) => {
      let productsArray = [];
      // eslint-disable-next-line array-callback-return
      state.categories.map(({ products }) => {
        productsArray = [...productsArray, ...products];
      });
      return {
        ...state,
        products: productsArray,
        category: {},
      };
    },
    getCategoryProducts: (state, payload) => {
      // eslint-disable-next-line no-shadow
      const category = state.categories.find(({ id }) => id === payload);
      return {
        ...state,
        category,
        products: category.products,
      };
    },
    sortProducts: (state, payload) => {
      // eslint-disable-next-line max-len
      const sortedProducts = state.query ? state.searchedProducts.slice(0) : state.products.slice(0);
      const { ascending } = state;
      sortedProducts.sort((a, b) => {
        if (ascending) {
          if (a[payload] > b[payload]) {
            return -1;
          }
          if (a[payload] < b[payload]) {
            return 1;
          }
          return 0;
        }
        if (a[payload] < b[payload]) {
          return -1;
        }
        if (a[payload] > b[payload]) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        ascending: !ascending,
        searchedProducts: state.query ? sortedProducts : state.searchedProducts,
        products: state.query ? state.products : sortedProducts,
      };
    },
    searchedProducts: (state, payload) => {
      // eslint-disable-next-line max-len
      const searchedProducts = state.products.filter(({ name }) => name.toLowerCase().includes(payload.toLowerCase()));
      return {
        ...state,
        query: payload,
        searchedProducts,
      };
    },
    setPickedProduct: (state, payload) => {
      const product = state.products.find(({ id }) => id === payload);
      return {
        ...state,
        product,
      };
    },
  },
  effects: (dispatch) => ({
  }),
};
