import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  FETCH_QUESTION_ANSWERS_FAIL,
  ALL_QUESTIONS_FETCH_SUCCESS,
  ALL_QUESTIONS_FETCH_FAIL
} from './types';

export const fetchQuestionAnswers = questionId => {
  return dispatch => {
    firebase
      .database()
      .ref(`forum/Answers/${questionId}`)
      .once('value')
      .then(snapshot => {
        dispatch({ type: FETCH_QUESTION_ANSWERS_SUCCESS, payload: snapshot.val() });
      })
      .catch(err => {
        dispatch({ type: FETCH_QUESTION_ANSWERS_FAIL, payload: null });
      });
  };
};

export const fetchAllQuestions = () => {
  return dispatch => {
    firebase
      .database()
      .ref('forum/Questions')
      .once('value')
      .then(snapshot => {
        dispatch({ type: ALL_QUESTIONS_FETCH_SUCCESS, payload: snapshot.val() });
      })
      .catch(err => {
        dispatch({ type: ALL_QUESTIONS_FETCH_FAIL, payload: null });
      });
  };
};
