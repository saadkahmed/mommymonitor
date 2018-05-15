// create back button
import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChangedReg,
         passwordChangedReg,
         passwordChangedConfirm,
         registerUser
         } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';
// static navigationOptions = ({ navigation, goBack }) => ({
//     gesturesEnabled: false,
//     headerTitle: 'Registration',
//     headerLeft: (
//         <TouchableHighlight
//             onPress={() => {
//                 navigation.goBack({ routeName: 'MainScreen' });
//             }}
//         >
//             <Text> back </Text>
//         </TouchableHighlight>
//     )
// });
class Register extends React.Component {
    componentWillMount() {
        console.log('this is the register screen \n', this.props);
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
      const { email, password, confirmPassword } = this.props;
      this.props.registerUser({ email, password, confirmPassword });
    }

    onContinueRegistration() {
      this.props.navigation.navigate('PersonalInfo');
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
        <CardSection>
            <Button onPress={this.onContinueRegistration.bind(this)} >
              Continue Registration
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
 };
};

export default connect(mapStateToProps, { emailChangedReg,
                                          passwordChangedReg,
                                          passwordChangedConfirm,
                                          registerUser
                                          })(Register);
