import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  FETCH_QUESTION_ANSWERS_FAIL,
  ALL_QUESTIONS_FETCH_SUCCESS,
  ALL_QUESTIONS_FETCH_FAIL,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL
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

export const createQuestion = (title, text, date) => {
  const { currentUser } = firebase.auth();
  const user_id = currentUser ? currentUser.uid : '';
  const userRef = firebase.database().ref(`users/${user_id}/userinfo`);
  const questionRef = firebase.database().ref('forum/Questions');
  return dispatch => {
    if (user_id != '') {
      userRef.on('value', snapshot => {
        const userinfo = snapshot.val();
        const user_name = `${userinfo.first_name} ${userinfo.last_name}`;
        const question = { user_id, user_name, title, text, date, votes: 0 };
        const dbQuestion = questionRef.push(question);
        if (dbQuestion.key) {
          dispatch({ type: CREATE_QUESTION_SUCCESS, payload: { key: dbQuestion.key, question } });
        }
      });
    }
  };
};
