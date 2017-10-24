import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state; //destructuring 2 properties from the state object

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
          });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
      if (this.state.loading === true) {
        return <Spinner size="small" />;
      } else {
        return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
      }
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
          //value is a RN keyword that refers to the value in the box
          // value can be set to a string called poop, and it will say poop
          // instead, i'm setting it to the current state
            placeholder='youremail@something.com'
            label='Email'
            value={this.state.email}
            onChangeText={emailtext => this.setState({ email: emailtext })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={passtext => this.setState({ password: passtext })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
