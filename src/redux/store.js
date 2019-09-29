import createHistory from 'history/createBrowserHistory';
import { init } from '@rematch/core';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { user } from './models/user';


export const history = createHistory();

export const store = init({
  models: {
    user,
  },
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {},
  },
});
