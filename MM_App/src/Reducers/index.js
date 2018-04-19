import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './AuthReducer';
import nav from './NavigationReducer';
import reg from './RegReducer';
import forg from './ForgotReducer';

export default combineReducers({
  auth,
  nav,
  reg,
  forg,
  form: formReducer
});
