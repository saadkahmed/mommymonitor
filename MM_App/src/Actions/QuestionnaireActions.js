import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  QUESTIONNAIRE_FETCH_SUCCESS,
  QUESTIONNAIRE_FETCH_FAIL,
  ANSWER_TEXT_CHANGED
} from './types';

export const QuestionnaireFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    console.log('inside dispatch for quesionaire');
    if (currentUser != null) {
      firebase
        .database()
        .ref('/questions')
        .on('value', snapshot => {
          dispatch({ type: QUESTIONNAIRE_FETCH_SUCCESS, payload: snapshot.val() });
        });
    } else {
      dispatch({ type: QUESTIONNAIRE_FETCH_FAIL });
    }
  };
};

export const answerTextChanged = (id, answer) => {
  return {
    type: ANSWER_TEXT_CHANGED,
    payload: { id, answer }
  };
};

export const sendAnswers = (answers) => {
  const navToProfile = NavigationActions.navigate({
    routeName: 'Profile'
  });
  const { currentUser } = firebase.auth();
  return dispatch => {
    if (currentUser != null) {
      const userAnswerRef = firebase.database().ref(`/answers/${currentUser.uid}`);
      const newAnswersRef = userAnswerRef.push();
      newAnswersRef.set({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        answers
      }).then(() => dispatch(navToProfile));
    }
  };
};
