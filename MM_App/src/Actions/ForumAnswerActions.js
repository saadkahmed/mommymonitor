import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ANSWERS_FETCH_SUCCESS } from './types';

export const fetchAnswers = questionId => {
  const navToLogin = NavigationActions.navigate({
    routeName: 'Main'
  });

  return dispatch => {
    firebase.auth();
  };
};
