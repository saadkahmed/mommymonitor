import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // thunk is middleware
import AppWithNavigationState from './src/Navigators/LoginRouter';
import reducers from './src/Reducers';
//create new firebase key and stuff before publishing
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
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MM_App', () => Application);

export default Application;
