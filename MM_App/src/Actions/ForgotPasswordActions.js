import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGEDF,
        FORGOT_REQUEST_SUCCESS,
        } from './types';

// for forgot password
export const emailChangedF = (text) => {
  return {
    type: EMAIL_CHANGEDF,
    payload: text
  };
};

export const sendForgot = (emailf) => {
    const navToLogin = NavigationActions.navigate({
              routeName: 'LoggedIn'
            });

  return (dispatch) => {
      dispatch({ type: FORGOT_REQUEST_SUCCESS });
      firebase.auth().sendPasswordResetEmail(emailf)
      .then(() => {
          Alert.alert('Email sent');
          dispatch(navToLogin);
    }).catch((e) => { Alert.alert(e.message); });
  };
};
