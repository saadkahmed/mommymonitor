import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = reduxifyNavigator('root');

export {
  middleware,
  addListener,
};
