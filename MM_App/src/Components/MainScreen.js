import React, { Component } from 'react';
import firebase from 'firebase';
import { Image, StyleSheet, ImageBackground, View, Alert } from 'react-native';
import { CardSection, Input, Button } from './common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

const mmlogo = require('../../pictures/mommymonitor-final-logo.png');

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    loginuser() {
        const { navigate } = this.props.navigation;

        if (this.state.email === '' || this.state.password === '') {
            Alert.alert('One or more fields left blank');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
             navigate('LoginPage');
             console.log(user.email);
    }).catch(() => { Alert.alert('Email or Password invalid'); });
    }

  render() {
      const { navigate } = this.props.navigation;

    return (
        <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
        >
        <View>

        <View style={styles.imageStyle}>
          <Image source={mmlogo} />
        </View>

        <CardSection>
          <Input
            label="email"
            placeholder="JohnSmith@hotmail.com"
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={(password) => this.setState({ password })}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

          <CardSection>
            <Button onPress={this.loginuser.bind(this)} >
              Sign In
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => navigate('Register')} >
              Register
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => navigate('Forgot')} >
              Forgot Password
            </Button>
          </CardSection>

          </View>

        </ImageBackground>
    );
  }
}


let styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    imageStyle: {
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      paddingBottom: 15,
      borderColor: '#ddd',
      position: 'relative'
    }
});

export default MainScreen;
