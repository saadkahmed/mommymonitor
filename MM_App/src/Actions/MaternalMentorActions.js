import firebase from 'firebase';
//import { NavigationActions } from 'react-navigation';
import { MENTOR_FETCH_SUCCESS, MENTOR_FETCH_FAILED } from './types';
import { logoutUser } from '../Actions';

export const MentorChange = Obj => {
    console.log(Obj);
};

export const MentorFetch = () => {
    const { currentUser } = firebase.auth();
    //make sure to check package here!!!!!!!!!!!!!!
    return dispatch => {
        if (currentUser != null) {
            console.log('this is the snapshot');
            firebase
                .database()
                .ref('/MaternalMentors')
                .on('value', snapshot => {
                    dispatch({ type: MENTOR_FETCH_SUCCESS, payload: snapshot.val() });
                    // firebase
                    //     .storage()
                    //     .ref(`images/${snapshot.val().name}.jpg`)
                    //     .getDownloadURL()
                    //     .then(pic => {
                    //         console.log('got here too');
                    //         console.log(pic);
                    //     })
                    //     .catch(err => {
                    //         console.log(err);
                    //     });
                    });
                } else {
                    dispatch({ type: MENTOR_FETCH_FAILED });
                }
            };
        };
// using set because again i dont think we need a unqiue id for a persons MaternalMentor

// this is where you would be the navigate to registration complete.
export const AssignMentor = mentor => {
    const { currentUser } = firebase.auth();
    // const navToLogin = NavigationActions.navigate({
    //     routeName: 'MainScreen'
    // }); we can just use logout user at this point
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/MaternalMentor/`)
            .set(mentor)
            .then(() => {
                firebase
                .database()
                .ref(`/users/${currentUser.uid}/registration`)
                .set({ complete: true });
                dispatch(logoutUser);
            })
            .catch(err => {
                console.log(err);
            });
    };
};
