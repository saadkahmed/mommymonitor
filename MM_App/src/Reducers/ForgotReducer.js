//import firebase from 'firebase';
import { FORGOT_REQUEST_SUCCESS, SENT_FORGOT_REQUEST } from '../Actions/types';

const INITIAL_STATE = { loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORGOT_REQUEST_SUCCESS: {
      //when the forgot email request is being sent
      return { ...state, loading: true };
    }

    case SENT_FORGOT_REQUEST: {
      //after it has been sent return initial state
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};
