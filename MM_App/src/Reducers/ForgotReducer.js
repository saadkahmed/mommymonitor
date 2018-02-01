import firebase from 'firebase';
import { Alert } from 'react-native';

import { EMAIL_CHANGEDF, SEND_FORGOT_REQUEST } from '../Actions/types';

const INITIAL_STATE = { emailf: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGEDF: {
      console.log(action.payload);
      return { ...state, emailf: action.payload };
    }
    case SEND_FORGOT_REQUEST: {
      firebase.auth().sendPasswordResetEmail(action.payload).then(() => {
          Alert.alert('Email Sent');
      }).catch(() => { Alert.alert('Invalid Email'); });
      return state;
    }
    default:
      return state;
  }
};
