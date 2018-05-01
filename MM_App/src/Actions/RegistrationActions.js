import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
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
    let err;
    const navToQuestionaire = NavigationActions.navigate({
             routeName: 'PersonalInfo'
           });
    return (dispatch) => {
    if (email === '' || password === '' || confirmPassword === '') { // error here
       err = 'fields left blank';
   } else if (password !== confirmPassword) {
       err = 'passwords do no match';
   }
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Account Created');
        dispatch(navToQuestionaire);
        dispatch({ type: REGISTER_COMPLETE });
    }).catch((e) => {
        if (err) {
            Alert.alert(err);
        } else { Alert.alert(e.message); }
    });
  };
};
