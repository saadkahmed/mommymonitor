import { EMAIL_CHANGEDR, PASSWORD_CHANGEDR, PASSWORD_CHANGED2R } from '../Actions/types';

const INITIAL_STATE = { emailr: '', passwordr: '', passwordr2: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGEDR:
      console.log(action.payload);
      return { ...state, emailr: action.payload };
    case PASSWORD_CHANGEDR: {
      console.log(action.payload);
      return { ...state, passwordr: action.payload };
    }
    case PASSWORD_CHANGED2R: {
      return { ...state, passwordr2: action.payload };
    }
    default:
      return state;
  }
};
