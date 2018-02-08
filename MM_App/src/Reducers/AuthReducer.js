import { Alert } from 'react-native';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL } from '../Actions/types';

const INITIAL_STATE = { email: '',
                        password: '',
                        user: null,
                        loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log(action.payload);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED: {
      console.log(action.payload);
      return { ...state, password: action.payload };
    }
    case LOGIN_USER: {
      return { ...state, loading: true };
    }
    case LOGIN_USER_SUCCESS: {
      return { ...state, user: action.payload, email: '', password: '', loading: false };
    }
    case LOGIN_USER_FAIL: {
      Alert.alert('Invalid Email or Password');
      return { ...state, email: '', password: '', loading: false };
    }
    default:
      return state;
  }
};
