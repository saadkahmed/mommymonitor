import React from 'react';
import firebase from 'firebase';
import Routing from './src/Components/myrouting';

firebase.initializeApp({
  apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
  authDomain: 'mommymonitorapp.firebaseapp.com',
  databaseURL: 'https://mommymonitorapp.firebaseio.com',
  projectId: 'mommymonitorapp',
  storageBucket: 'mommymonitorapp.appspot.com',
  messagingSenderId: '189527696222',
});

class Application extends React.Component {
    render() {
        return (
          <Routing />
        );
    }
}

export default Application;
