import firebase from 'firebase';
import moment from 'moment';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  FETCH_QUESTION_ANSWERS_FAIL,
  ALL_QUESTIONS_FETCH_SUCCESS,
  ALL_QUESTIONS_FETCH_FAIL,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL,
  CREATE_ANSWER_SUCCESS,
  CREATE_ANSWER_FAIL,
  SELECT_QUESTION_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAIL
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

export const createQuestion = (title, text) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const date = moment().format('MMM DD, YYYY @ hh:mma');
  const userRef = firebase.database().ref(`users/${uid}/userinfo`);
  const questionRef = firebase.database().ref('forum/Questions');
  return dispatch => {
    if (uid) {
      userRef.on('value', snapshot => {
        const { first_name, last_name } = snapshot.val();
        const user_name = `${first_name} ${last_name}`;
        const question = { user_id: uid, user_name, title, text, date, votes: 0 };
        const { key } = questionRef.push(question);
        if (key) {
          dispatch({ type: CREATE_QUESTION_SUCCESS, payload: { key, question } });
        } else {
          dispatch({ type: CREATE_QUESTION_FAIL, payload: null });
        }
      });
    }
  };
};

export const createAnswer = (questionId, text) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const date = moment().format('MMM DD, YYYY @hh:mma');
  const userRef = firebase.database().ref(`users/${uid}/userinfo`);
  const answerRef = firebase.database().ref(`forum/Answers/${questionId}`);
  return dispatch => {
    if (uid) {
      userRef.on('value', snapshot => {
        const { first_name, last_name } = snapshot.val();
        const user_name = `${first_name} ${last_name}`;
        const answer = { user_id: uid, user_name, text, date, votes: 0 };
        const { key } = answerRef.push(answer);
        if (key) {
          dispatch({ type: CREATE_ANSWER_SUCCESS, payload: { key, answer } });
        } else {
          dispatch({ type: CREATE_ANSWER_FAIL, payload: null });
        }
      });
    }
  };
};

export const deleteQuestion = (user_id, question_id) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const answerRef = firebase.database().ref(`forum/Answers/${question_id}`);
  const questionRef = firebase.database().ref(`forum/Questions/${question_id}`);
  return dispatch => {
    if (uid == user_id) {
      answerRef.remove();
      questionRef.remove();
      dispatch({ type: DELETE_QUESTION_SUCCESS, payload: { question_id } });
    } else {
      dispatch({ type: DELETE_QUESTION_FAIL });
    }
  };
};

export const selectQuestion = question => {
  return dispatch => {
    if (question) {
      dispatch({ type: SELECT_QUESTION_SUCCESS, payload: question });
    } else {
      dispatch({ type: SELECT_QUESTION_FAIL, payload: null });
    }
  };
};
