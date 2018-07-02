import firebase from 'firebase';
import _ from 'lodash';
import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL } from './types';

export const FetchQuestions = () => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  return dispatch => {
    firebase
      .database()
      .ref(`users/${uid}/Questions`)
      .on('value', snapshot => {
        const obj = snapshot.val();
        const keys = Object.keys(obj);
        const temp = [];
        let data = [];
        _.forEach(keys, key => {
          temp.push(obj[key]);
        });
        data = _.map(temp, ele => {
          const { one, three } = ele;
          return { one, three };
        });
        dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: { data, keys } });
      });
  };
};
