import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  MENTOR_NAME_CHANGED,
  MENTOR_EMAIL_CHANGED,
  MENTOR_PHONE_CHANGED,
  MENTOR_REQUEST_SUCCESS
} from './types';

export const mentorNameChanged = text => {
  return {
    type: MENTOR_NAME_CHANGED,
    payload: text
  };
};

export const mentorEmailChanged = text => {
  return {
    type: MENTOR_EMAIL_CHANGED,
    payload: text
  };
};

export const mentorPhoneChanged = text => {
  return {
    type: MENTOR_PHONE_CHANGED,
    payload: text
  };
};

export const sendMentorRequest = ({ name, email, phone }) => {
  let err;
  const navToMainScreen = NavigationActions.navigate({
    routeName: 'MainScreen'
  });
  return dispatch => {
    if (name === '' || email === '' || phone === '') {
      err = 'Fields left blank';
    }
    if (err) {
      Alert.alert(err);
    } else {
      const mentorRequestsRef = firebase.database().ref('/mentorrequests');
      const newMentorRequestRef = mentorRequestsRef.push();
      newMentorRequestRef.set({
        name,
        email,
        phone,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }).then(() => {
        Alert.alert('Mentor Request Sent!');
        dispatch(navToMainScreen);
        dispatch({ type: MENTOR_REQUEST_SUCCESS });
      });
    }
  };
};
