import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../Actions';
import { CardSection, Input, Button, Spinner } from './common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');
const mmlogo = require('../../pictures/MM_LOGO.png');

// information about prenatal health information
// on demand, maternal mentors being able to communicate
// education - long term.
// website should have information about more medical stuff

// long term machine learning

// what if a mentor stops doing their job, like they arent getting paid
// how do we compensate the user????
// -elise we will have customer service number/email

class MainScreen extends Component {
    componentWillMount() {
      console.log('this is the mainscreen props \n', this.props);
    }
    // button helper functions
    // navigate to forgot screen

    onForgotPress() {
      this.props.navigation.navigate('Forgot');
    }

    // navigate to register screen
    onRegisterPress() {
      this.props.navigation.navigate('Register');
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

          <View style={styles.buttonContainer}>

            <Image style={styles.imageStyle} source={mmlogo} />


            <CardSection>
              <Input
                label="Email"
                placeholder="JohnSmith@hotmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection cstyle={{ backgroundColor: '#f7f17e' }}>
              <Input
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                secureTextEntry
              />
            </CardSection>


            <View style={styles.subButtonContainer}>
              {this.renderButton()}
            </View>

          </View>

          <View style={styles.signupOrForgotContainer}>

            <TouchableOpacity style={styles.frButton} onPress={this.onForgotPress.bind(this)}>
              <Text style={{ textDecorationLine: 'underline', color: '#737373' }}>
                Forgot Your Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.frButton} onPress={this.onRegisterPress.bind(this)}>
              <Text style={{ textDecorationLine: 'underline', color: '#737373' }}>
                Sign Up Here
              </Text>
            </TouchableOpacity>

          </View>

        </ImageBackground>
    );
  }
}


  let styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      imageStyle: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
      },
      buttonContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'stretch',
      },

      subButtonContainer: {
        backgroundColor: 'transparent',
        padding: 5,
        paddingTop: 10,
        flexDirection: 'row',
        position: 'relative',
        width: 150

      },
      frButton: {
        backgroundColor: 'transparent',
        paddingLeft: 30,
        paddingRight: 30,
      },
      signupOrForgotContainer: {
        flexDirection: 'row',
        marginRight: 10,

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
