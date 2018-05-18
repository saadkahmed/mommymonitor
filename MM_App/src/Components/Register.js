import React from 'react';
import { View, Switch, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChangedReg,
         passwordChangedReg,
         passwordChangedConfirm,
         registerUser,
         switchchange
              } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

class Register extends React.Component {
    componentWillMount() {
        //console.log('this is the register screen \n', this.props);
    }
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
      const { email, password, confirmPassword, switchvalue } = this.props;
      this.props.registerUser({ email, password, confirmPassword, switchvalue });
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
            <Switch
                onValueChange={(value) => this.props.switchchange(value)}
                value={this.props.switchvalue}
            />
            <Text> Accept Terms and Conditions </Text>
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
   switchvalue: state.reg.switchvalue
 };
};

export default connect(mapStateToProps, { emailChangedReg,
                                          passwordChangedReg,
                                          passwordChangedConfirm,
                                          registerUser,
                                          switchchange
                                          })(Register);
