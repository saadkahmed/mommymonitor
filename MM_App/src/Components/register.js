// create back button
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { emailChangedReg,
         passwordChangedReg,
         passwordChangedConfirm,
         registerUser
         } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

class Register extends React.Component {
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
      // const { email, password, confirmPassword } = this.props;
      // this.props.registerUser({ email, password, confirmPassword });
      //dont navigate after they press register only go there after registration,
      //this should be inside of registrationactions
      const navigateToPersonalInfo = NavigationActions.navigate({
        routeName: 'PersonalInfo'
      });
      this.props.navigation.dispatch(navigateToPersonalInfo);
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
 };
};

export default connect(mapStateToProps, { emailChangedReg,
                                          passwordChangedReg,
                                          passwordChangedConfirm,
                                          registerUser
                                          })(Register);
