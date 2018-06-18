import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { MAININFORMATIONUPDATE,
    LOADING_DATA
} from './types';

const InitialInfo = {
    age: '20',
    current_children: '0',
    ethnicity: '1',
    expecting_date: new Date(),
    first_name: 'first',
    last_name: 'last',
    marital_status: '1',
    number_children: '0',
    phone_number: '',
    postal_code: '',
    trimester: '0'
};

export const UpdateInfo = (Obj) => {
    const { currentUser } = firebase.auth();
    const navToLogin = NavigationActions.navigate({
             routeName: 'PickPackage'
         });
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
            .update(Obj)
            .then(() => {
                dispatch(navToLogin);
                dispatch({ type: MAININFORMATIONUPDATE, payload: Obj });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const LoadData = () => {
    const { currentUser } = firebase.auth();
//pull the infor and pass it to payload
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/userinfo`)
        .on('value', snapshot => {
            if (snapshot.val() === null) {
                dispatch({ type: LOADING_DATA, payload: InitialInfo });
            } else {
                dispatch({ type: LOADING_DATA, payload: snapshot.val() });
                console.log('heres the data for the current user');
                console.log(snapshot.val());
            }
        });
    };
};
// move the navigation the the selecting a package.
// and save some key stuff into the reducer so you can change it later
