// create back button
import React from 'react';
import firebase from 'firebase';
import { View,
        Alert } from 'react-native';
import { Button, CardSection, Input, Header } from '../Components/common';

export default class Register extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
      };
  }

  submitinfo() {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(user) {
          Alert.alert('Registration Complete');
          //user.sendEmailVerification(); send the user a verification email
      }).catch(function(e){ alert(e); })
    }

  render() {
    return (

        <View>

        <Header headerText="Registration" />

        <CardSection>
          <Input
            label="email"
            placeholder="JohnSmith@hotmail.com"
            onChangeText={(email) => this.setState({ email })}
            value={this.props.email}
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
            <Button onPress={this.submitinfo.bind(this)} >
              Register
            </Button>
        </CardSection>

        </View>
    );
  }
}
