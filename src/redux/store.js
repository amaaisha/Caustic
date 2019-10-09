import createHistory from 'history/createBrowserHistory';
import { init } from '@rematch/core';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { user } from './models/user';
import { category } from './models/category';

export const history = createHistory();

export const store = init({
  models: {
    user,
    category,
  },
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {},
  },
});
