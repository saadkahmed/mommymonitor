import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
         REGISTER_COMPLETE
      } from '../Actions/types';

const INITIAL_STATE = { email: '', password: '', confirmPassword: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGEDREG: {
      return { ...state, email: action.payload };
    }

    case PASSWORD_CHANGEDREG: {
      return { ...state, password: action.payload };
    }

    case PASSWORD_CHANGEDCONFIRM: {
      return { ...state, confirmPassword: action.payload };
    }

    case REGISTER_USER: {
        return { ...state, loading: true };
    }

    case REGISTER_COMPLETE: {
        return INITIAL_STATE;
    }

    default:
      return state;
  }
};
