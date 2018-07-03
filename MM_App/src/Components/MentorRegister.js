import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import {
  mentorNameChanged,
  mentorEmailChanged,
  mentorPhoneChanged,
  sendMentorRequest
} from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class MentorRegister extends React.Component {
  onNameChange = (text) => {
    this.props.mentorNameChanged(text);
  }
  onEmailChange = (text) => {
    this.props.mentorEmailChanged(text);
  }
  onPhoneChange = (text) => {
    this.props.mentorPhoneChanged(text);
  }
  onRegisterPress() {
    const name = this.props.name;
    const email = this.props.email;
    const phone = this.props.phone;
    this.props.sendMentorRequest({ name, email, phone });
  }

  render() {
    return (
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >
        <View style={styles.inputContainer}>
          <CardSection>
            <Input
              label="Name"
              placeholder="John Smith"
              onChangeText={this.onNameChange}
              value={this.props.name}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Email"
              placeholder="JohnSmith@hotmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Phone"
              placeholder="(647)-123-4567"
              onChangeText={this.onPhoneChange}
              value={this.props.phone}
            />
          </CardSection>
          <View style={styles.buttonContainer}>
            <Button onPress={this.onRegisterPress.bind(this)} >
              Register
            </Button>
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
      width: 150,

    },
    inputContainer: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
      flex: 1,
      width: '100%',
      alignItems: 'center'
    }
  }
);

const mapStateToProps = state => {
  return {
    name: state.MentorRegister.name,
    email: state.MentorRegister.email,
    phone: state.MentorRegister.phone
  };
};

export default connect(mapStateToProps, {
  mentorNameChanged,
  mentorEmailChanged,
  mentorPhoneChanged,
  sendMentorRequest
})(MentorRegister);
