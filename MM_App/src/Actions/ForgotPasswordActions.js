import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGEDF,
        SEND_FORGOT_REQUEST,
        FORGOT_REQUEST_SUCCESS,
        SENT_FORGOT_REQUEST
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
          dispatch({ type: SEND_FORGOT_REQUEST, payload: 'Email Sent' });
          dispatch(navToLogin);
          dispatch({ type: SENT_FORGOT_REQUEST });
    }).catch((e) => { dispatch({ type: SEND_FORGOT_REQUEST, payload: e.message }); });
  };
};
