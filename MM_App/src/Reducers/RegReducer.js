import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
         REGISTER_COMPLETE
      } from '../Actions/types';

const INITIAL_STATE = { email: '', password: '', confirmPassword: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGEDREG: { //email changed
      return { ...state, email: action.payload };
    }

    case PASSWORD_CHANGEDREG: { //password changed
      return { ...state, password: action.payload };
    }

    case PASSWORD_CHANGEDCONFIRM: { //confirm password changed
      return { ...state, confirmPassword: action.payload };
    }

    case REGISTER_USER: { //register user request
        return { ...state, loading: true };
    }

    case REGISTER_COMPLETE: { //register user complete
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
