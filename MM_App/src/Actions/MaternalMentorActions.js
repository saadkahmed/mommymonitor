import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { MENTOR_FETCH_SUCCESS,
    MENTOR_FETCH_FAILED,
} from './types';

export const MentorChange = Obj => {
    console.log(Obj);
};

export const MentorFetch = () => {
    const { currentUser } = firebase.auth();
    //make sure to check package here!!!!!!!!!!!!!!
    return (dispatch) => {
        if (currentUser != null) {
            firebase.database().ref('/MaternalMentors')
            .on('value', snapshot => {
                dispatch({ type: MENTOR_FETCH_SUCCESS, payload: snapshot.val() });
            });
        } else {
            dispatch({ type: MENTOR_FETCH_FAILED });
        }
    };
};
// using set because again i dont think we need a unqiue id for a persons MaternalMentor
export const AssignMentor = (mentor) => {
    const { currentUser } = firebase.auth();
    const navToLogin = NavigationActions.navigate({
             routeName: 'LoggedIn'
         });
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/MaternalMentor/`)
            .set(mentor)
            .then(() => {
                dispatch(navToLogin);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
