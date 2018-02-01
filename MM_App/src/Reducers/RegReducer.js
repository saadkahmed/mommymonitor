import { Alert } from 'react-native';
import firebase from 'firebase';
import { EMAIL_CHANGEDR,
         PASSWORD_CHANGEDR,
         PASSWORD_CHANGEDR2,
         REGISTER_USER } from '../Actions/types';

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
    case REGISTER_USER: {
      console.log(action.payload.emailr);
      console.log(action.payload.passwordr);

firebase.auth().createUserWithEmailAndPassword(action.payload.emailr, action.payload.passwordr)
        .then(user => {
          Alert.alert(user, 'Registration Complete');
      })
      .catch(() => { Alert.alert('This Email is in use'); });
      return state;
  }
    default:
      return state;
  }
};
