import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './NavigationReducer';
import reg from './RegReducer';

export default combineReducers({
  auth,
  nav,
  reg,
});
