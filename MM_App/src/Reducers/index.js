import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './AuthReducer';
import nav from './NavigationReducer';
import reg from './RegReducer';
import forg from './ForgotReducer';
import personalInfo from './PersonalInfoReducer';
import PickMentor from './PickMentorReducer.js';

export default combineReducers({
  auth,
  nav,
  reg,
  forg,
  personalInfo,
  PickMentor,
  form: formReducer //redux form connection to store
});
