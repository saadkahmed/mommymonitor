/***
** This file is not being used
**
**/
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { MAININFORMATIONUPDATE, LOADING_DATA } from './types';

export const UpdateInfo = Obj => {
    console.log(Obj);
  return { type: MAININFORMATIONUPDATE, payload: Obj };
};

export const SendInfo = Obj => {
  const { currentUser } = firebase.auth();
  const navToLogin = NavigationActions.navigate({
    routeName: 'PickPackage'
  });
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/userinfo`)
      .update(Obj)
      .then(() => {
        dispatch(navToLogin);
        dispatch({ type: MAININFORMATIONUPDATE, payload: Obj });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const LoadData = () => {
  const { currentUser } = firebase.auth();
  //pull the info and pass it to payload
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/userinfo`)
      .on('value', snapshot => {
        if (snapshot.val() === null) {
          dispatch({ type: LOADING_DATA });
        } else {
          dispatch({ type: LOADING_DATA, payload: snapshot.val() });
        }
      });
  };
};
// move the navigation the the selecting a package.
// and save some key stuff into the reducer so you can change it later
