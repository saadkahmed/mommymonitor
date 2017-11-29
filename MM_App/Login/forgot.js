import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Button, CardSection, Input, Header } from '../Components/common';

export default class IForgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    submitinfo() {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(function(){
            Alert.alert("Email Sent");
        }).catch(function(e){ alert(e); })
    }

  render() {
    return (
        <View>

        <Header headerText="Forgot Password" />


        <CardSection>
          <Input
            onChangeText={(email) => this.setState({ email })}
            label="Email"
            placeholder="Email@something.com"
          />
        </ CardSection>

        <CardSection>
            <Button onPress={this.submitinfo.bind(this)} >
              Register
            </Button>
        </CardSection>

        </View>

    );
  }
}
