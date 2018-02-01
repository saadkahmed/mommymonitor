import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGED,
          PASSWORD_CHANGED,
          EMAIL_CHANGEDR,
          PASSWORD_CHANGEDR,
          PASSWORD_CHANGEDR2,
          REGISTER_USER,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL,
          EMPTY_REGISTRATION_FIELDS,
          UNEQUAL_PASSWORDS,
          EMAIL_CHANGEDF,
          SEND_FORGOT_REQUEST
              } from './types';

//for login

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  const navToLogin = NavigationActions.navigate({
            routeName: 'LoggedIn'
          });

  return (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      dispatch(navToLogin);
    }).catch(() => {
      dispatch({ type: LOGIN_USER_FAIL });
    });
  };
};

// for registration

export const emailChangedR = (text) => {
  return {
    type: EMAIL_CHANGEDR,
    payload: text
  };
};

export const passwordChangedR = (text) => {
  return {
    type: PASSWORD_CHANGEDR,
    payload: text
  };
};

export const passwordChangedR2 = (text) => {
  return {
    type: PASSWORD_CHANGEDR2,
    payload: text
  };
};

export const registrationProcedure = ({ emailr, passwordr, passwordr2 }) => {
  return (dispatch) => {
    if (emailr === '' || passwordr === '' || passwordr2 === '') {
      dispatch({ type: EMPTY_REGISTRATION_FIELDS });
    } else if (passwordr !== passwordr2) {
      dispatch({ type: UNEQUAL_PASSWORDS });
    }
      dispatch({ type: REGISTER_USER, payload: { emailr, passwordr } });
  };
};

// for forgot password

export const emailChangedF = (text) => {
  return {
    type: EMAIL_CHANGEDF,
    payload: text
  };
};

export const sendForgot = (emailf) => {
  return {
    type: SEND_FORGOT_REQUEST,
    payload: emailf
  };
};
