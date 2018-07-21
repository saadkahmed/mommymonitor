import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { REGISTER_USER, REGISTER_COMPLETE } from './types';
// for registration

export const registerUser = ({ email, password, confirmPassword, switchvalue }) => {
  let err;
  const navToPersonalInfo = NavigationActions.navigate({
    routeName: 'PersonalInfo'
  });
  return dispatch => {
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
        .then(user => {
          firebase
            .database()
            .ref(`/users/${user.uid}/registration`)
            // get a reference to the user's database location
            .set({ complete: false }); // creating the completion flag in the RT database
          dispatch(navToPersonalInfo); // move onto the next part of the questionnaire
          dispatch({ type: REGISTER_COMPLETE }); // returns initial state ** dont know why
        })
        .catch(e => {
          Alert.alert(e.message);
        });
    }
  };
};

export const mentorRegister = () => {
  return dispatch => {
    dispatch(
      NavigationActions.navigate({
        routeName: 'MentorRegister'
      })
    );
  };
};

// right now we are navigating straight to maternal mentor selection change this later
