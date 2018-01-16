<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import LoginRouter from './src/Components/LoginRouter';
import reducers from './src/Reducers';
=======
import React from 'react';
import firebase from 'firebase';
//import Routing from './src/Components/myrouting';
import RegistrationRouter from './src/Components/LoginRouter';
>>>>>>> parent of b7c85f13... email and password fields redux'd
=======
import React from 'react';
import firebase from 'firebase';
//import Routing from './src/Components/myrouting';
import RegistrationRouter from './src/Components/LoginRouter';
>>>>>>> parent of b7c85f13... email and password fields redux'd
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
class Application extends Component {

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
<<<<<<< HEAD
<<<<<<< HEAD
        <Provider store={createStore(reducers)}>
          <LoginRouter />
        </Provider>
=======
          <RegistrationRouter />
>>>>>>> parent of b7c85f13... email and password fields redux'd
=======
          <RegistrationRouter />
>>>>>>> parent of b7c85f13... email and password fields redux'd
        );
    }
}

export default Application;
