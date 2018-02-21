import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
         REGISTER_FAILED,
         REGISTER_SUCCESS,
         REGISTER_COMPLETE
      } from './types';
// for registration
export const emailChangedReg = (text) => {
  return {
    type: EMAIL_CHANGEDREG,
    payload: text
  };
};

export const passwordChangedReg = (text) => {
  return {
    type: PASSWORD_CHANGEDREG,
    payload: text
  };
};

export const passwordChangedConfirm = (text) => {
  return {
    type: PASSWORD_CHANGEDCONFIRM,
    payload: text
  };
};

export const registerUser = ({ email, password, confirmPassword }) => {
    const navToMain = NavigationActions.navigate({
             routeName: 'Main'
           });
    return (dispatch) => {
    if (email === '' || password === '' || confirmPassword === '') { // error here
       dispatch({ type: REGISTER_FAILED, payload: 'Fields Left Blank' });
       return;
   } else if (password !== confirmPassword) {
       dispatch({ type: REGISTER_FAILED, payload: 'Passwords Do Not Match' });
       return;
   }
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: REGISTER_SUCCESS });
        dispatch(navToMain);
        dispatch({ type: REGISTER_COMPLETE });
    }).catch((e) => {
        dispatch({ type: REGISTER_FAILED, payload: e.message });
    });
  };
};
