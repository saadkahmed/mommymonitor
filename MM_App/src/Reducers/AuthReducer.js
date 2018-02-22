import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGOUT_USER,
         } from '../Actions/types';

const INITIAL_STATE = { email: '',
                        password: '',
                        user: null,
                        loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED: {
      return { ...state, password: action.payload };
    }

    case LOGIN_USER: {
      return { ...state, loading: true };
    }

    case LOGIN_USER_SUCCESS: {
        return { INITIAL_STATE,
                user: action.payload };
    }

    case LOGIN_USER_FAIL: {
      return { ...state, password: '', loading: false };
    }

    case LOGOUT_USER: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};
