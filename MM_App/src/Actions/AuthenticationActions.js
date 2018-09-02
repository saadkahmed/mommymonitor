import firebase from 'firebase';
import { Alert } from 'react-native';
//import { NavigationActions } from 'react-navigation';
import { Analytics } from 'aws-amplify';
import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './types';

export const loginUser = ({ email, password }) => {
  let err;
  let nextScreen;
  // const navToLogin = NavigationActions.navigate({
  //   routeName: 'LoggedInRouter'
  // });
  // const navToPersonalInfo = NavigationActions.navigate({
  //   routeName: 'PersonalInfo'
  // });
  return dispatch => new Promise((resolve, reject) => {
    if (email.trim() === '' || password.trim() === '') {
      err = 'Fields Left Blank';
    }
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userobj => {
          const { user } = userobj;
          console.log('user id is', user.uid);
            firebase
              .database()
              .ref(`/users/${user.uid}/registration`)
              .on('value', snapshot => {
                if (snapshot.val().complete === false) {
                    nextScreen = 'PersonalInfo';
                } else {
                    nextScreen = 'LoggedInRouter';
                }
                dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, nextScreen } });
                resolve();
                //Analytics.updateEndpoint({ UserId: user.uid });
                Analytics.record({
                  name: '_userauth.sign_in',
                  userId: user.uid
                });
              });
          })
      .catch(e => {
        reject(e);
        if (err) {
          Alert.alert(err);
        } else {
          Alert.alert(e.message);
        }
        dispatch({ type: LOGIN_USER_FAIL });
      });
  });
};

// const navToMain = NavigationActions.navigate({
//   routeName: 'MainScreen'
// });

export const logoutUser = () => {
  return dispatch => new Promise((resolve) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_USER, payload: { nextScreen: 'MainScreen' } });
        resolve();
      })
      .catch(e => {
        Alert.alert(e.message);
        resolve();
      });
      setTimeout(() => reject('error'), 20000);
  });
};
