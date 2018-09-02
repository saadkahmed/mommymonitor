import firebase from 'firebase';
import {
  FORUM_QUESTION_LIST_FETCH_SUCCESS,
  FORUM_QUESTION_LIST_FETCH_FAIL
} from './types';

export const questionListFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      firebase.database().ref('/forum')
        .once('value', snapshot => {
          dispatch({ type: FORUM_QUESTION_LIST_FETCH_SUCCESS,
          payload: snapshot.val() });
        });
    } else {
      dispatch({ type: FORUM_QUESTION_LIST_FETCH_FAIL });
    }
  };
};
