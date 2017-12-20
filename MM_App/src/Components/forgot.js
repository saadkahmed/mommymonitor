import React from 'react';
import firebase from 'firebase';
import { View, Alert } from 'react-native';
import { Button, CardSection, Input, Header } from '../Components/common';

export default class IForgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    submitinfo() {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
            Alert.alert('Email Sent');
        }).catch(() => { Alert.alert('Invalid Email'); });
    }

  render() {
    return (
        <View>

        <Header headerText="Forgot Password" />
        <CardSection>
          <Input
            onChangeText={(email) => this.setState({ email })}
            label="Email"
            placeholder="JohnSmith@hotmail.com"
          />
        </CardSection>

        <CardSection>
            <Button onPress={this.submitinfo.bind(this)} >
              Register
            </Button>
        </CardSection>

        </View>

    );
  }
}
