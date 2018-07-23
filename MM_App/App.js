import React from 'react';
import { AppRegistry } from 'react-native';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // thunk is middleware
import AppWithNavigationState from './src/Navigators/LoginRouter';
import reducers from './src/Reducers';
import Amplify, { Analytics } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
//create new firebase key and stuff before publishing
class Application extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
      authDomain: 'mommymonitorapp.firebaseapp.com',
      databaseURL: 'https://mommymonitorapp.firebaseio.com',
      projectId: 'mommymonitorapp',
      storageBucket: 'mommymonitorapp.appspot.com',
      messagingSenderId: '189527696222'
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    Font.loadAsync({
      'fjalla-one': require('./assets/fonts/FjallaOne-Regular.ttf')
    });
  }

  render() {
    Analytics.record('appRender');
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
