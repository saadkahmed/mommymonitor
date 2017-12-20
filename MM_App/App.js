import React, { Component } from 'react';
//import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/Reducers';
import { WelcomeScreen, MainScreen } from './src/Components/WelcomeScreen';
import Routing from './src/Components/myrouting';

class Application extends Component {
/*
    constructor(props) {
        super(props);
        this.state = {
        component: <WelcomeScreen />
      };
    }
*/
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.setState({ component: <Routing /> });
        }, 1000);
    }
    componentWillUnmount() {
         clearTimeout(this.timeoutHandle);
    }

    coponentWillMount() {
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
      const store = createStore(Reducers);

        return (
          <Provider store={createStore(store)}>
            <MainScreen />
          </Provider>
        );
    }
}

export default Application;
