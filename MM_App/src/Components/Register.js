import React from 'react';
import { View, Switch, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { registerUser, mentorRegister } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    switchvalue: false
  };
  onEmailChange(text) {
    this.setState({ email: text });
  }
  onPasswordChange(text) {
    this.setState({ password: text });
  }
  onPasswordConfirmChange(text) {
    this.setState({ confirmPassword: text });
  }

  onRegisterPress() {
    this.props.registerUser(this.state);
  }

  onMentorRequestPress = () => {
    this.props.mentorRegister();
  };

  switchchange(value) {
    this.setState({ switchvalue: value });
  }
  render() {
    return (
      <ImageBackground source={backgroundpic} style={styles.backgroundImage}>
        <CardSection>
          <Input
            label="Email"
            placeholder="JohnSmith@hotmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.state.password}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordConfirmChange.bind(this)}
            value={this.state.confirmPassword}
            label="Confirm password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <View style={styles.contract}>
          <Switch
            onValueChange={value => this.switchchange(value)}
            value={this.state.switchvalue}
          />
          <Text style={{ backgroundColor: 'transparent' }}> Accept Terms and Conditions </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.onRegisterPress.bind(this)}>Register</Button>
        </View>

        <TouchableOpacity
          onPress={this.onMentorRequestPress}
          style={{ padding: 10, backgroundColor: 'transparent' }}
        >
          <Text>Are you a Maternal-Mentor?</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10
  },
  contract: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    padding: 5,
    paddingTop: 10,
    flexDirection: 'row',
    position: 'relative',
    width: 150
  }
});

export default connect(
  {},
  {
    registerUser,
    mentorRegister
  }
)(Register);
