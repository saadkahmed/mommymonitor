import React, { Component } from 'react';
import firebase from 'firebase';
import { Image, StyleSheet, ImageBackground, View, Alert } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged } from '../Actions';
import { CardSection, Input, Button } from './common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

const mmlogo = require('../../pictures/mommymonitor-final-logo.png');

class MainScreen extends Component {

    onEmailChange(text) {
      this.props.emailChanged(text);
    }
    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    loginuser() {
        const { navigate } = this.props.navigation;

        if (this.state.email === '' || this.state.password === '') {
            Alert.alert('One or more fields left blank');
        } else {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
             navigate('LoggedIn');
             console.log(user.email);
    }).catch(() => { Alert.alert('Invalid Email or Password'); });
    }
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
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
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

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      password: state.auth.password
    };
  };

export default connect(mapStateToProps, { emailChanged, passwordChanged })(MainScreen);
