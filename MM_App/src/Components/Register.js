import React from 'react';
import { View, Switch, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { emailChangedReg,
         passwordChangedReg,
         passwordChangedConfirm,
         registerUser,
         switchchange
              } from '../Actions';

import { Button, CardSection, Input } from '../Components/common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

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
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >

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

        <View style={styles.contract}>
            <Switch
                onTintColor='#852053'
                onValueChange={(value) => this.props.switchchange(value)}
                value={this.props.switchvalue}
            />
            <Text style={{ backgroundColor: 'transparent' }}> Accept Terms and Conditions </Text>

        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={this.onRegisterPress.bind(this)} >
            Register
          </Button>
        </View>

      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10
    },
    contract: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      backgroundColor: 'transparent',
      padding: 5,
      paddingTop: 10,
      flexDirection: 'row',
      position: 'relative',
      width: 150
    }
  }
);

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
