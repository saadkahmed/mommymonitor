import firebase from 'firebase';
import {
  CONVERSATION_FETCH_SUCCESS,
  CONVERSATION_FETCH_FAIL,
  MESSAGE_FETCH_SUCCESS,
  MESSAGE_FETCH_FAIL,
  MESSAGE_TEXT_CHANGED,
  MESSAGE_SEND_SUCCESS,
  USER_FETCH_SUCCESS,
  CONVERSATION_LIST_FETCH_SUCCESS,
  CONVERSATION_LIST_FETCH_FAIL
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

export const conversationListFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      firebase.database().ref(`/chat/users/${currentUser.uid}`)
        .once('value', snapshot => {
          dispatch({ type: CONVERSATION_LIST_FETCH_SUCCESS,
          payload: snapshot.val() });
        });
    } else {
      dispatch({ type: CONVERSATION_LIST_FETCH_FAIL });
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

export const onMessageTextChanged = (text) => {
  return {
    type: MESSAGE_TEXT_CHANGED,
    payload: { text }
  };
};

export const sendMessage = (conversationId, newMessage) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    if (currentUser != null) {
      const messageListRef = firebase.database().ref(`/chat/conversations/${conversationId}`);
      const newMessageRef = messageListRef.push();
      newMessageRef.set({
        message: newMessage,
        user: currentUser.uid,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }).then(() => dispatch({ type: MESSAGE_SEND_SUCCESS }));
    }
  };
};

export const currentUserFetch = () => {
  const { currentUser } = firebase.auth();
 return (dispatch) => {
   if (currentUser != null) {
     dispatch({
       type: USER_FETCH_SUCCESS,
       payload: { userId: currentUser.uid }
     });
   }
 };
};
