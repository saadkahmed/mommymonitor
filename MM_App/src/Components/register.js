// create back button
import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';

import { emailChangedReg,
         passwordChangedReg,
         passwordChangedConfirm,
         registerUser
         } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

class Register extends React.Component {

  static navigationOptions = {
    headerTitle: 'Registration',
    gesturesEnabled: false
};

    onEmailChange(text) {
      this.props.emailChangedReg(text);
    }
    onPasswordChange(text) {
      this.props.passwordChangedReg(text);
    }
    onPasswordConfirmChange(text) {
      this.props.passwordChangedConfirm(text);
    }

    onRegisterPress() {
      const { email, password, confirmPassword } = this.props;
      this.props.registerUser({ email, password, confirmPassword });
    }

    renderMessage() {
        if (this.props.message) {
            Alert.alert(this.props.message);
        }
    }

  render() {
    return (

        <View>
        <CardSection>
          <Input
            label="Email"
            placeholder="JohnSmith@hotmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        {this.renderMessage()}
        <CardSection>
          <Input
            onChangeText={this.onPasswordConfirmChange.bind(this)}
            value={this.props.confirmPassword}
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
   email: state.reg.email,
   password: state.reg.password,
   confirmPassword: state.reg.confirmPassword,
   nav: state.nav,
   message: state.reg.message
 };
};

export default connect(mapStateToProps, { emailChangedReg,
                                          passwordChangedReg,
                                          passwordChangedConfirm,
                                          registerUser
                                          })(Register);
