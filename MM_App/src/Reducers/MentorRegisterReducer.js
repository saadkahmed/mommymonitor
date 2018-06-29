import { MENTOR_NAME_CHANGED,
         MENTOR_EMAIL_CHANGED,
         MENTOR_PHONE_CHANGED,
         MENTOR_REQUEST_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = { name: '',
                        email: '',
                        phone: '',
                        loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MENTOR_NAME_CHANGED: {
      return { ...state, name: action.payload };
    }

    case MENTOR_EMAIL_CHANGED: {
      return { ...state, email: action.payload };
    }

    case MENTOR_PHONE_CHANGED: {
      return { ...state, phone: action.payload };
    }

    case MENTOR_REQUEST_SUCCESS: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
