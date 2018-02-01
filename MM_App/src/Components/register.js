// create back button
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { emailChangedR,
         passwordChangedR,
         passwordChangedR2,
         registerUser,
         registrationProcedure } from '../Actions';

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
  /*
  if (emailr === '' || passwordr === '' || passwordr2 === '') {
    Alert.alert('Fields left blank');
  } else if (passwordr !== passwordr2) {
    this.props.passwordEqualityCheck({passwordr, })
  }
  else if (passwordr === passwordr2) {
    this.props.registerUser({ emailr, passwordr });
  }
  */

    onEmailChangeR(text) {
      this.props.emailChangedR(text);
    }
    onPasswordChangeR(text) {
      this.props.passwordChangedR(text);
    }
    onPasswordChangeR2(text) {
      this.props.passwordChangedR2(text);
    }

    onRegisterPress() {
      const { emailr, passwordr, passwordr2 } = this.props;

      this.props.registrationProcedure({ emailr, passwordr, passwordr2 });
    }
/*
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
*/
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
            onChangeText={this.onPasswordChangeR.bind(this)}
            value={this.props.passwordr} // not sure if i need this
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChangeR2.bind(this)}
            value={this.props.passwordr2}
            label="Confirm password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
            <Button onPress={this.onRegisterPress.bind(this)} >
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
                                          passwordChangedR2,
                                          registrationProcedure,
                                          registerUser })(Register);
