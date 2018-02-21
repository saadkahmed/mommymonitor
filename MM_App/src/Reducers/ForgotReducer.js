//import firebase from 'firebase';
import { EMAIL_CHANGEDF,
    SEND_FORGOT_REQUEST,
    FORGOT_REQUEST_SUCCESS,
    SENT_FORGOT_REQUEST
    } from '../Actions/types';

const INITIAL_STATE = { emailf: '', message: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGEDF: {
      return { ...state, emailf: action.payload, message: '' };
    }

    case FORGOT_REQUEST_SUCCESS: {
        return { ...state, loading: true, message: '' };
    }

    case SEND_FORGOT_REQUEST: {
      return { ...state, message: action.payload };
    }
    case SENT_FORGOT_REQUEST: {
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
