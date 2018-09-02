import firebase from 'firebase';
import { Alert } from 'react-native';
import { FORGOT_REQUEST_SUCCESS } from './types';
// import { EMAIL_CHANGEDF, FORGOT_REQUEST_SUCCESS } from './types'; removed email from global

// for forgot password

export const sendForgot = email => {
    let nextScreen;
    return dispatch => new Promise((resolve, reject) => {
        firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            nextScreen = 'MainScreen';
            Alert.alert('Email sent');
            dispatch({ type: FORGOT_REQUEST_SUCCESS, payload: { nextScreen } });
            resolve();
            })
            .catch(e => {
                Alert.alert(e.message);
                reject(e);
            });
        });
    };
