import firebase from 'firebase';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGEDREG,
         PASSWORD_CHANGEDREG,
         PASSWORD_CHANGEDCONFIRM,
         REGISTER_USER,
         REGISTER_COMPLETE,
         SWITCH_VALUE_CHANGED
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

export const switchchange = (value) => {
    return {
        type: SWITCH_VALUE_CHANGED,
        payload: value
    };
};

export const registerUser = ({ email, password, confirmPassword, switchvalue }) => {
    let err;
    const navToQuestionaire = NavigationActions.navigate({
             routeName: 'PersonalInfo'
         });
    return (dispatch) => {
    if (email === '' || password === '' || confirmPassword === '') { // error here
       err = 'fields left blank';
   } else if (password !== confirmPassword) {
       err = 'passwords do no match';
   } else if (switchvalue === false) {
       err = 'you must accept terms and conditions';
   }
   if (err) {
       Alert.alert(err);
   } else {
        dispatch({ type: REGISTER_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebase.database().ref(`/users/${user.uid}/registration`)
            .set({ complete: false });
            console.log(user.uid);
            dispatch(navToQuestionaire);
            dispatch({ type: REGISTER_COMPLETE });
        }).catch((e) => {
            Alert.alert(e.message);
        });
    }
  };
};

// right now we are navigating straight to maternal mentor selection change this latter
