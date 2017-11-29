import React from 'react';
import firebase from 'firebase';
import { Image,
        StyleSheet, ImageBackground, View } from 'react-native';
import { CardSection, Input, Button } from './common';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    loginuser() {
        const { navigate } = this.props.navigation;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(user){
        navigate('SomeScreen');
        }).catch(function(e){ alert(e); });
    }

  render() {
      const { navigate } = this.props.navigation;

    return (

        <ImageBackground
        source={require('../pictures/BackgroundForPages.jpg')}
        style={styles.backgroundImage}
        >

        <View>

        <View style={styles.imageStyle}>
          <Image source={require('../pictures/mommymonitor-final-logo.png')} />
        </View>

        <CardSection>
          <Input
            label="email"
            placeholder="email@something.com"
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
        </ CardSection>

          <CardSection>
            <Button onPress={this.loginuser.bind(this)} >
              Sign In
            </Button>
          </ CardSection>

          <CardSection>
            <Button onPress={() => navigate('Register')} >
              Register
            </Button>
          </ CardSection>

          <CardSection>
            <Button onPress={() => navigate('Forgot')} >
              Forgot a Password
            </Button>
          </ CardSection>

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
