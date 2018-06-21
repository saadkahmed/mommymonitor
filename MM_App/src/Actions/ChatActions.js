import firebase from 'firebase';
import { CONVERSATION_FETCH_SUCCESS, CONVERSATION_FETCH_FAIL } from './types';

export const conversationFetch = () => {
  const { currentUser } = firebase.auth();
  console.log(currentUser);
  return (dispatch) => {
    if (currentUser != null) {
      console.log('`/chat/users/${currentUser.uid}`');
      firebase.database().ref(`/chat/users/${currentUser.uid}`)
        .once('value', snapshot => {
          dispatch({ type: CONVERSATION_FETCH_SUCCESS,
          payload: snapshot.val() });
        });
    } else {
      console.log('else `/chat/users/${userId}`');
      dispatch({ type: CONVERSATION_FETCH_FAIL });
    }
  };
};
