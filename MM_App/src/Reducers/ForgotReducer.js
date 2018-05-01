//import firebase from 'firebase';
import { EMAIL_CHANGEDF,
    FORGOT_REQUEST_SUCCESS,
    SENT_FORGOT_REQUEST
    } from '../Actions/types';

const INITIAL_STATE = { emailf: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGEDF: { //email changed
      return { ...state, emailf: action.payload };
    }

    case FORGOT_REQUEST_SUCCESS: { //when the forgot email request is being sent
        return { ...state, loading: true };
    }

    case SENT_FORGOT_REQUEST: { //after it has been sent return initial state
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
