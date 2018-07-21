import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { FORGOT_REQUEST_SUCCESS } from './types';
// import { EMAIL_CHANGEDF, FORGOT_REQUEST_SUCCESS } from './types'; removed email from global

// for forgot password

export const sendForgot = email => {
  const navToLogin = NavigationActions.navigate({
    routeName: 'Main'
  });

  return dispatch => {
    dispatch({ type: FORGOT_REQUEST_SUCCESS });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Email sent');
        dispatch(navToLogin);
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  };
};
