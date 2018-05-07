import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './AuthReducer';
import nav from './NavigationReducer';
import reg from './RegReducer';
import forg from './ForgotReducer';
import ques from './QuestionaireReducer';

export default combineReducers({
  auth,
  nav,
  reg,
  forg,
  ques,
  form: formReducer //redux form connection to store
});
