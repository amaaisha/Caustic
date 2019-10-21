import categoryApi from '../../api/categoryApi';

const categoryState = {
  categories: [{}],
};


export const categories = {
  state: { ...categoryState },
  reducers: {
    getCategoriesSuccess: (state, payload) => ({
      ...state,
      categories: [...payload],
    }),
  },
  effects: (dispatch) => ({
    getCategories: async () => {
      const response = await categoryApi.getCategories();
      if (!response.success) {
        return response.message;
      }
      dispatch.categories.getCategoriesSuccess(response.result);
    },
  }),
};
