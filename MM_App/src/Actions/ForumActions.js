import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { QUESTION_FETCH_SUCCESS } from './types';

export const fetchQuestion = (questionId = 'question_1') => {
  return dispatch => {
    firebase
      .database()
      .ref(`forum/${questionId}`)
      .once('value')
      .then(snapshot => {
        dispatch({ type: QUESTION_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
