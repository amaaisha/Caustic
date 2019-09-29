import categoryArray from '../../utils/mock'

const categoryState = {
  categories: categoryArray,
  products: [],
  category: {
    name: '',
    products: []
  }
};

export const category = {
  state: { ...categoryState },
  reducers: {
    getProducts: (state) => {
      let productsArray = [];
      state.categories.map(({products}) => {
        productsArray = [...productsArray, ...products];
      })
      return{
        ...state,
        products: productsArray,
        category: {},
      }
    },
    getCategoryProducts: (state, payload) => {
      const category = state.categories.find( ({id}) => id === payload)
      return{
        ...state,
        category,
        products: category.products
      }
    }
  },
  effects: dispatch => ({
  }),
};
