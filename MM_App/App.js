import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import RegistrationRouter from './src/Components/LoginRouter';
import reducers from './src/Reducers';
/*
firebase.initializeApp({
  apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
  authDomain: 'mommymonitorapp.firebaseapp.com',
  databaseURL: 'https://mommymonitorapp.firebaseio.com',
  projectId: 'mommymonitorapp',
  storageBucket: 'mommymonitorapp.appspot.com',
  messagingSenderId: '189527696222',
});
*/
class Application extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
      authDomain: 'mommymonitorapp.firebaseapp.com',
      databaseURL: 'https://mommymonitorapp.firebaseio.com',
      projectId: 'mommymonitorapp',
      storageBucket: 'mommymonitorapp.appspot.com',
      messagingSenderId: '189527696222',
    };
    firebase.initializeApp(config);
  }

    render() {
        return (
        <Provider store={createStore(reducers)}>
          <RegistrationRouter />
        </Provider>
        );
    }
}

export default Application;
