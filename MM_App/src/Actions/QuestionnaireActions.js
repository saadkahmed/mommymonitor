import firebase from 'firebase';
import { QUESTIONNAIRE_FETCH_SUCCESS, QUESTIONNAIRE_FETCH_FAIL,
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
