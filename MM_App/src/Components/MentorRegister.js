import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { sendMentorRequest } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class MentorRegister extends React.Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onNameChange = text => {
    this.setState({ name: text });
  };
  onEmailChange = text => {
    this.setState({ email: text });
  };
  onPhoneChange = text => {
    this.setState({ phone: text });
  };
  onRegisterPress() {
    this.props.sendMentorRequest(this.state);
  }

  render() {
    return (
      <ImageBackground source={backgroundpic} style={styles.backgroundImage}>
        <View style={styles.inputContainer}>
          <CardSection>
            <Input
              label="Name"
              placeholder="John Smith"
              onChangeText={this.onNameChange.bind(this)}
              value={this.state.name}
            />
          </CardSection>
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
              label="Phone"
              placeholder="(647)-123-4567"
              onChangeText={this.onPhoneChange.bind(this)}
              value={this.state.phone}
            />
          </CardSection>
          <View style={styles.buttonContainer}>
            <Button onPress={this.onRegisterPress.bind(this)}>Register</Button>
          </View>
        </View>
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
  buttonContainer: {
    backgroundColor: 'transparent',
    padding: 5,
    paddingTop: 10,
    flexDirection: 'row',
    position: 'relative',
    width: 150
  },
  inputContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});

export default connect(
  () => { return {}; },
  {
    sendMentorRequest
  }
)(MentorRegister);
