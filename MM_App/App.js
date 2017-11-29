//make app logo the full logo
// How to comment in jsx
// {/* A JSX comment, this will work :)
//        <div>
//
//        </div>
//        */}
import React from 'react';
import firebase from 'firebase';
import WelcomeScreen from './Components/WelcomeScreen';
import Routing from './Components/myrouting';

firebase.initializeApp({
  apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
  authDomain: 'mommymonitorapp.firebaseapp.com',
  databaseURL: 'https://mommymonitorapp.firebaseio.com',
  projectId: 'mommymonitorapp',
  storageBucket: 'mommymonitorapp.appspot.com',
  messagingSenderId: '189527696222',
});

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        component: <WelcomeScreen />
      };
    }
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.setState({ component: <Routing /> });
        }, 1000);
    }
    componentWillUnmount() {
         clearTimeout(this.timeoutHandle);
    }
    render() {
        return (
          this.state.component
        );
    }
}
