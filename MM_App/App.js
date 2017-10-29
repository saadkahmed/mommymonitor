import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component<{}> {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGwT4CRUTv34Nxtu1io8ft0jcnEJFJPeo',
      authDomain: 'mommymonitorapp.firebaseapp.com',
      databaseURL: 'https://mommymonitorapp.firebaseio.com',
      projectId: 'mommymonitorapp',
      storageBucket: '',
      messagingSenderId: '189527696222'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
          this.setState({ loggedIn: false });
        }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <View style={styles.viewStyle}><Spinner size="large" /></View>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Login' />
        {this.renderContent()}
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 300,
  },
  textStyle: { // there needs to be a space after the colon
    fontSize: 20
  }
};

export default App;
