import firebase from 'firebase';
import {
  QUESTIONNAIRE_FETCH_SUCCESS,
  QUESTIONNAIRE_FETCH_FAIL,
  ANSWER_TEXT_CHANGED
} from './types';

export const QuestionnaireFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      firebase.database().ref('/questions')
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
