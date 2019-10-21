import createHistory from 'history/createBrowserHistory';
import { init } from '@rematch/core';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { user } from './models/user';
import { category } from './models/category';
import { myProduct } from './models/myProduct';
import { categories } from './models/categories';

export const history = createHistory();

export const store = init({
  models: {
    categories,
    user,
    category,
    product: myProduct,
  },
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {},
  },
});
