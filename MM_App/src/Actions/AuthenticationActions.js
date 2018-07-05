import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './types';

//for login/logout
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  let err;
  const navToLogin = NavigationActions.navigate({
    routeName: 'LoggedInRouter'
  });
  const navToPersonalInfo = NavigationActions.navigate({
    routeName: 'PersonalInfo'
  });
  return dispatch => {
    if (email.trim() === '' || password.trim() === '') {
      err = 'Fields Left Blank';
    }
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //console.log(user.uid);
        firebase
          .database()
          .ref(`/users/${user.uid}/registration`)
          .on('value', snapshot => {
            if (snapshot.val().complete === false) {
              dispatch(navToPersonalInfo);
            } else {
              dispatch(navToLogin);
            }
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
          });
      })
      .catch(e => {
        if (err) {
          Alert.alert(err);
        } else {
          Alert.alert(e.message);
        }
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};

export const logoutUser = () => {
  const navToMain = NavigationActions.navigate({
    routeName: 'MainScreen'
  });

  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(navToMain);
        dispatch({ type: LOGOUT_USER });
      })
      .catch(e => {
          Alert.alert(e.message);
      });
  };
};
