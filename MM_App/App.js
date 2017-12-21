// use react-native dimenstions to align items as per screne size
//var deviceHeight = Dimensions.get('window').height;
//var deviceWidth = Dimensions.get('window').width;

import React from 'react';
import firebase from 'firebase';
import WelcomeScreen from './src/Components/WelcomeScreen';
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

export default Application;
