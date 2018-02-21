import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
         REGISTER_FAILED,
         REGISTER_SUCCESS,
         REGISTER_COMPLETE
      } from '../Actions/types';

const INITIAL_STATE = { email: '', password: '', confirmPassword: '', message: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGEDREG: {
      return { ...state, email: action.payload, message: '' };
    }

    case PASSWORD_CHANGEDREG: {
      return { ...state, password: action.payload, message: '' };
    }

    case PASSWORD_CHANGEDCONFIRM: {
      return { ...state, confirmPassword: action.payload, message: '' };
    }

    case REGISTER_USER: {
        return { ...state, loading: true };
    }

    case REGISTER_SUCCESS: {
        return { email: '',
                password: '',
                confirmPassword: '',
                loading: false,
                message: 'Account Created' };
    }

    case REGISTER_FAILED: {
        return { ...state, message: action.payload };
    }

    case REGISTER_COMPLETE: {
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
