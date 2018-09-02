import firebase from 'firebase';
import { Alert } from 'react-native';
import { REGISTER_USER, REGISTER_COMPLETE } from './types';
// for registration

export const registerUser = ({ email, password, confirmPassword, switchvalue }) => {
  let err;
  let nextScreen;
  return dispatch => new Promise((resolve, reject) => {
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      err = 'fields left blank';
    } else if (password !== confirmPassword) {
      err = 'passwords do no match';
    } else if (switchvalue === false) {
      err = 'you must accept terms and conditions';
    }
    if (err) {
      Alert.alert(err);
    } else {
      dispatch({ type: REGISTER_USER }); // sets a loading flag
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password) //
        .then(userobj => {
            const { user } = userobj;
            console.log('new user', user);
            firebase
            .database()
            .ref(`/users/${user.uid}/registration`)
            // get a reference to the user's database location
            .set({ complete: false }); // creating the completion flag in the RT database
            nextScreen = 'PersonalInfo';
            dispatch({ type: REGISTER_COMPLETE, payload: { nextScreen } });
            resolve();
        })
        .catch(e => {
          Alert.alert(e.message);
          reject(e);
        });
    }
    });
};

// right now we are navigating straight to maternal mentor selection change this later
