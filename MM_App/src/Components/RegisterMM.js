import React from 'react';
import { View, Switch, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import { Button, CardSection, Input } from '../Components/common';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class RegisterMM extends React.Component {
  render() {
    return (
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >
        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <CardSection>
            <Input
              label="Email"
              placeholder="JohnSmith@hotmail.com"
              //onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              //onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              label="Password"
              placeholder="password"
              secureTextEntry
            />

          <CardSection>
            <Input
              label="Email"
              placeholder="JohnSmith@hotmail.com"
              //onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              //onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              label="Password"
              placeholder="password"
              secureTextEntry
            />
          </CardSection>

          <CardSection>
            <Input
              //onChangeText={this.onPasswordConfirmChange.bind(this)}
              value={this.props.confirmPassword}
              label="Confirm password"
              placeholder="password"
              secureTextEntry
            />
          </CardSection>

            </CardSection>

            <CardSection>
              <Input
                //onChangeText={this.onPasswordConfirmChange.bind(this)}
                value={this.props.confirmPassword}
                label="Confirm password"
                placeholder="password"
                secureTextEntry
              />
            </CardSection>

            <View style={styles.contract}>
                <Switch
                    onValueChange={(value) => this.props.switchchange(value)}
                    value={this.props.switchvalue}
                />
                <Text style={{ backgroundColor: 'transparent' }}> Accept Terms and Conditions </Text>

            </View>

            <View style={styles.buttonContainer}>
              <Button>
                Register
              </Button>
            </View>

        </View>

      </ImageBackground>
    );
  }
}

let styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'space-between',
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


export default RegisterMM;
