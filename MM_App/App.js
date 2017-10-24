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
      apiKey: 'AIzaSyAXi-qGLdB965w6_XlbJ7gQvCpw01eFGRI',
      authDomain: 'mmtest-ec5d1.firebaseapp.com',
      databaseURL: 'https://mmtest-ec5d1.firebaseio.com',
      projectId: 'mmtest-ec5d1',
      storageBucket: 'mmtest-ec5d1.appspot.com',
      messagingSenderId: '576928457082'
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
