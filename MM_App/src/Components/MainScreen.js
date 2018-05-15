import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../Actions';
import { CardSection, Input, Button, Spinner } from './common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');
const mmlogo = require('../../pictures/mommymonitor-final-logo.png');

class MainScreen extends Component {
    componentWillMount() {
        console.log('this is the mainscreen props \n', this.props);
    }
    // button helper functions
    // navigate to forgot screen
<<<<<<< HEAD
componentWillMount(props) {
  console.log(props);
}
=======
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1

    onForgotPress() {
      // const navigateToForgot = NavigationActions.navigate({
      //   routeName: 'Forgot'
      // });
      this.props.navigation.navigate('Forgot');
    }

    // navigate to register screen
    onRegisterPress() {
      // const navigateToRegister = NavigationActions.navigate({
      //     routeName: 'RegisterRouter'
      // });
      this.props.navigation.navigate('RegisterRouter');
    }

    //attempt to log user in
    onLoginPress() {
      const { email, password } = this.props; // destructuring email and pass for login verification
      this.props.loginUser({ email, password }); //loginUser is expecting an object
      }

    // text handlers
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    // Login handler
    renderButton() {
  if (this.props.loading) {
    return <Spinner size='large' />;
  }
  return (
    <Button onPress={this.onLoginPress.bind(this)} >
      Sign In
    </Button>
  );
}

  render() {
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
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <Button onPress={this.onRegisterPress.bind(this)} >
              Register
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onForgotPress.bind(this)} >
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
      password: state.auth.password,
      loading: state.auth.loading,
    };
  };

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
    })(MainScreen);
