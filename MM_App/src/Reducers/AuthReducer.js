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
                        loading: false,
                        error: ''
                      };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };

    case PASSWORD_CHANGED: {
      return { ...state, password: action.payload, error: '' };
    }

    case LOGIN_USER: {
      return { ...state, loading: true, error: '' };
    }

    case LOGIN_USER_SUCCESS: {
        return { email: '',
                password: '',
                loading: false,
                error: '',
                user: action.payload };
    }

    case LOGIN_USER_FAIL: {
      return { ...state, password: '', loading: false, error: action.payload };
    }

    case LOGOUT_USER: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
};
