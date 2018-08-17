import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  QUESTION_FETCH_SUCCESS,
  QUESTION_FETCH_FAIL,
  ALL_QUESTIONS_FETCH_SUCCESS,
  ALL_QUESTIONS_FETCH_FAIL
} from './types';

export const fetchQuestion = (questionId = 'question_1') => {
  return dispatch => {
    firebase
      .database()
      .ref(`forum/${questionId}`)
      .once('value')
      .then(snapshot => {
        dispatch({ type: QUESTION_FETCH_SUCCESS, payload: snapshot.val() });
      })
      .catch(err => {
        dispatch({ type: QUESTION_FETCH_FAIL, payload: null });
      });
  };
};

export const fetchAllQuestions = () => {
  return dispatch => {
    firebase
      .database()
      .ref('forum')
      .once('value')
      .then(snapshot => {
        dispatch({ type: ALL_QUESTIONS_FETCH_SUCCESS, payload: snapshot.val() });
      })
      .catch(err => {
        dispatch({ type: ALL_QUESTIONS_FETCH_FAIL, payload: null });
      });
  };
};
