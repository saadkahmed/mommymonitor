import { Alert } from 'react-native';
import firebase from 'firebase';
import { EMAIL_CHANGEDR,
         PASSWORD_CHANGEDR,
         PASSWORD_CHANGEDR2,
         REGISTER_USER,
         EMPTY_REGISTRATION_FIELDS,
         UNEQUAL_PASSWORDS } from '../Actions/types';

const INITIAL_STATE = { emailr: '', passwordr: '', passwordr2: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGEDR: {
      console.log(action.payload);
      return { ...state, emailr: action.payload };
    }
    case PASSWORD_CHANGEDR: {
      console.log(action.payload);
      return { ...state, passwordr: action.payload };
    }
    case PASSWORD_CHANGEDR2: {
      return { ...state, passwordr2: action.payload };
    }
    case EMPTY_REGISTRATION_FIELDS: {
      Alert.alert('One or more fields are empty');
      return state;
    }
    case UNEQUAL_PASSWORDS: {
      Alert.alert('Passwords do not match, please try again');
      return state;
    }
    case REGISTER_USER: {
      firebase.auth().createUserWithEmailAndPassword(action.payload.emailr, action.payload.passwordr)
        .then(() => {
          Alert.alert('Registration Complete');
      })
      .catch(() => { Alert.alert('This Email is in use'); });
      return state;
  }
    default:
      return state;
  }
};
