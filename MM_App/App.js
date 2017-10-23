import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAXi-qGLdB965w6_XlbJ7gQvCpw01eFGRI',
      authDomain: 'mmtest-ec5d1.firebaseapp.com',
      databaseURL: 'https://mmtest-ec5d1.firebaseio.com',
      projectId: 'mmtest-ec5d1',
      storageBucket: 'mmtest-ec5d1.appspot.com',
      messagingSenderId: '576928457082'
    });
    firebase.auth().onAuthStateChanged((user) => {

    });
  }

  render() {
    return (
      <View>
        <Header headerText='Login' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
