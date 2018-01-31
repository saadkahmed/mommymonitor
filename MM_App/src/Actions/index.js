import firebase from 'firebase';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         EMAIL_CHANGEDR,
         PASSWORD_CHANGEDR,
         PASSWORD_CHANGED2R } from './types';

//for login >

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    }); //only return action when we return a user
  };
};

// for registration >

export const emailChangedR = (text) => {
  return {
    type: EMAIL_CHANGEDR,
    payload: text
  };
};

// 2 password fields

export const passwordChangedR = (text) => {
  return {
    type: PASSWORD_CHANGEDR,
    payload: text
  };
};

export const passwordChanged2R = (text) => {
  return {
    type: PASSWORD_CHANGED2R,
    payload: text
  };
};
