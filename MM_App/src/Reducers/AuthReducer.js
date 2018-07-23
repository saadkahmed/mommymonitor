import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from '../Actions/types';
// import {
//   EMAIL_CHANGED,
//   PASSWORD_CHANGED, moved out of global state
const INITIAL_STATE = {
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      //logining in the user
      return { ...state, loading: true };
    }

    case LOGIN_USER_SUCCESS: {
      //after user has successfully logged in
      return {
        INITIAL_STATE,
        user: action.payload
      };
    }

    case LOGIN_USER_FAIL: {
      //when attempt to login fails
      return { ...state, password: '', loading: false };
    }

    case LOGOUT_USER: {
      //once user logs out return inital states
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};
