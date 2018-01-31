// create back button
import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';

import { emailChangedR, passwordChangedR, passwordChanged2R } from '../Actions';
import { Button, CardSection, Input } from '../Components/common';

class Register extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          confirmpassword: '',
      };
  }

  onEmailChangeR(text) {
    this.props.emailChangedR(text);
  }
  onPasswordChangeR(text) {
    this.props.passwordChangedR(text);
  }
  onPasswordChange2R(text) {
    this.props.passwordChanged2R(text);
  }

  submitinfo() {
if (this.state.email === '' || this.state.password === '' || this.state.confirmpassword === '') {
          Alert.alert('Fields left blank');
      } else if (this.state.confirmpassword === this.state.password) {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
              Alert.alert('Registration Complete');
              console.log(user.email);
          }).catch(() => { Alert.alert('This Email is in use'); });
      } else {
          Alert.alert('Passwords do not match');
      }
    }
    //user.sendEmailVerification(); send the user a verification email

  render() {
    return (

        <View>
        <CardSection>
          <Input
            label="Email"
            placeholder="JohnSmith@hotmail.com"
            onChangeText={this.onEmailChangeR.bind(this)}
            value={this.props.emailr}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChangeR}
            value={this.props.passwordr}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange2R}
            value={this.props.passwordr2}
            label="Confirm password"
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

const mapStateToProps = state => {
    return {
      emailr: state.reg.emailr,
      passwordr: state.reg.passwordr,
      passwordr2: state.reg.passwordr2,
      nav: state.nav
    };
  };

export default connect(mapStateToProps, { emailChangedR,
                                          passwordChangedR,
                                          passwordChanged2R })(Register);
