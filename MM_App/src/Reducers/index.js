import { combineReducers } from 'redux';
import auth from './AuthReducer';
import reg from './RegReducer';
import nav from './NavigationReducer';

export default combineReducers({
  auth,
  nav,
  reg
});
