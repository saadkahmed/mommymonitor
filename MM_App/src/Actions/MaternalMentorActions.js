//this file is not used anymore
import _ from 'lodash';
import firebase from 'firebase';
//import { NavigationActions } from 'react-navigation';
import { MENTOR_FETCH_FAILED, MENTOR_PICTURE_FETCH_SUCCESS } from './types';

export const MentorFetch = () => {
    const { currentUser } = firebase.auth();
    //make sure to check package here!!!!!!!!!!!!!!
    return dispatch => new Promise((resolve, reject) => {
        if (currentUser != null) {
            firebase
            .database()
            .ref('/MaternalMentors')
            .on('value', snapshot => {
                //dispatch({ type: MENTOR_FETCH_SUCCESS, payload: { oldMentors: snapshot.val() } });
                resolve(snapshot.val());
            });
        } else {
            dispatch({ type: MENTOR_FETCH_FAILED });
            reject();
        }
    })
    .then((data) => {
        console.log('this is data from mentor fetch', data);
        _.map(data, (val, id) => {
            arr = val;
            firebase
            .storage()
            .ref(`images/${arr.name}.jpg`)
            .getDownloadURL()
            .then(pic => {
                arr.picurl = pic;
                console.log(arr.picurl);
            })
            .then(() => {
                console.log(arr.picurl);
                return { ...arr, id };
            })
            .then(() => {
                console.log('this is the new data', NewMentors);
                dispatch({
                    type: MENTOR_PICTURE_FETCH_SUCCESS,
                    payload: { NewMentors }
                });
            })
            .catch(err => {
                console.log(err);
            });
        });
    });
};

// using set because again i dont think we need a unqiue id for a persons MaternalMentor
//lodash (_) takes the array and makes it an object so here we
//reassign that array to a variable so that we can manipulate it
//then each time a new object is read we pull the download url
//and add it to the object as a key value pair of
//picurl = the address for the picture
//have to redefine val i dont know why but it doesnt work otherwise
export const MentorPicFetch = (Mentors) => {
        NewMentors = _.map(Mentors, (val, id) => {
            let arr = {};
            arr = val;
            firebase
            .storage()
            .ref(`images/${arr.name}.jpg`)
            .getDownloadURL()
            .then(pic => {
                arr.picurl = pic;
                return { ...arr, id };
            })
            .catch(err => {
                console.log(err);
            });
            console.log('done', { ...arr, id });
        });
                //need to find a way to make next section wait for this return
        console.log('this is the data', data);
        return dispatch => new Promise((resolve) => {
            dispatch({
                type: MENTOR_PICTURE_FETCH_SUCCESS,
                payload: { data }
            });
            resolve();
        });
};


// this is where you would be the navigate to registration complete.
export const AssignMentor = mentor => {
  const { currentUser } = firebase.auth();
  // const navToLogin = NavigationActions.navigate({
  //     routeName: 'MainScreen'
  // }); we can just use logout user at this point
  return dispatch => new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/MaternalMentor/`)
      .set(mentor)
      .then(() => {
        firebase
          .database()
          .ref(`/users/${currentUser.uid}/registration`)
          .set({ complete: true });
         firebase
            .auth()
            .signOut();
        dispatch({ type: MENTOR_ASSIGN_SUCCESS, Payload: { nextScreen: 'MainScreen' } });
        resolve();
      })
      .catch(err => {
          reject(err);
        console.log(err);
      });
  });
};
