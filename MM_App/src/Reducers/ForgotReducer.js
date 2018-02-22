//import firebase from 'firebase';
import { EMAIL_CHANGEDF,
    FORGOT_REQUEST_SUCCESS,
    SENT_FORGOT_REQUEST
    } from '../Actions/types';

const INITIAL_STATE = { emailf: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGEDF: {
      return { ...state, emailf: action.payload };
    }

    case FORGOT_REQUEST_SUCCESS: {
        return { ...state, loading: true };
    }

    case SENT_FORGOT_REQUEST: {
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
