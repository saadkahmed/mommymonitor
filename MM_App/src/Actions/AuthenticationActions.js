import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGED,
          PASSWORD_CHANGED,
          LOGIN_USER,
          LOGOUT_USER,
          LOGIN_USER_FAIL,
          LOGIN_USER_SUCCESS,
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
    let err;
    const navToLogin = NavigationActions.navigate({
        routeName: 'LoggedInRouter'
    });
    const navToQuestionaire = NavigationActions.navigate({
        routeName: 'PersonalInfo'
    });
    return (dispatch) => {
        if (email === '' || password === '') {
            err = 'Fields Left Blank';
        }
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user.uid);
            firebase.database().ref(`/users/${user.uid}/registration`)
            .on('value', snapshot => {
                if (snapshot.val().complete === false) {
                    dispatch(navToQuestionaire);
                } else {
                    dispatch(navToLogin);
                }
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
            });
        }).catch((e) => {
            if (err) {
                Alert.alert(err);
            } else { Alert.alert(e.message); }
            dispatch({ type: LOGIN_USER_FAIL });
        });
    };
};

export const logoutUser = () => {
  firebase.auth().signOut().then(() => {
      const { currentUser } = firebase.auth();
      console.log(currentUser.uid);
      const Logout = NavigationActions.navigate({
            routeName: 'Main'
        });
    return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    dispatch(Logout);
  };
});
};
