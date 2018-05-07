import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { MAININFORMATIONUPDATE,
} from './types';

//sending data to firebase

export const UpdateInfo = (Obj) => {
    const { currentUser } = firebase.auth();
    const navToLogin = NavigationActions.navigate({
             routeName: 'PickPackage'
         });
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
            .push(Obj)
            .then(() => {
                dispatch(navToLogin);
                dispatch({ type: MAININFORMATIONUPDATE, payload: Obj });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
// move the navigation the the selecting a package.
// and save some key stuff into the reducer so you can change it later
