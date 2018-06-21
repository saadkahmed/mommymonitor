import firebase from 'firebase';
import {
  CONVERSATION_FETCH_SUCCESS,
  CONVERSATION_FETCH_FAIL,
  MESSAGE_FETCH_SUCCESS,
  MESSAGE_FETCH_FAIL
} from './types';

export const conversationFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      firebase.database().ref(`/chat/users/${currentUser.uid}`)
        .once('value', snapshot => {
          dispatch({ type: CONVERSATION_FETCH_SUCCESS,
          payload: snapshot.val() });
        });
    } else {
      dispatch({ type: CONVERSATION_FETCH_FAIL });
    }
  };
};


export const messageFetch = (conversationId) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      firebase.database().ref(`/chat/conversations/${conversationId}`)
        .on('value', snapshot => {
          dispatch({ type: MESSAGE_FETCH_SUCCESS,
          payload: snapshot.val() });
        });
    } else {
      dispatch({ type: MESSAGE_FETCH_FAIL });
    }
  };
};
