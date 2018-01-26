import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './NavigationReducer';

export default combineReducers({
  auth,
  nav,
});
