import { init } from '@rematch/core';
import {
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import authentication from './models/authentication';
import user from './models/user';
import history from './models/history';

// const middleware = routerMiddleware(history);

const store = init({
  models: {
    authentication,
    user,
    history
  },
  redux: {
    reducers: {
      router: routerReducer,
    },
    // middlewares: [middleware]
  }
});

export default store;
