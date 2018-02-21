import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGED,
          PASSWORD_CHANGED,
          LOGIN_USER,
          LOGOUT_USER,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL
              } from './types';

//for login/logout
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
      if (email === '' || password === '') {
          dispatch({ type: LOGIN_USER_FAIL, payload: 'Fields Left Blank' });
      }
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(navToLogin);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    }).catch((e) => {
        dispatch({ type: LOGIN_USER_FAIL, payload: e.message });
    });
  };
};

// we can add the fields left blank or incorrect password according to action. payload here
// depending on what the e.message is or the email and password values

export const logoutUser = () => {
  const Logout = NavigationActions.navigate({
            routeName: 'Main'
          });
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    dispatch(Logout);
  };
};
