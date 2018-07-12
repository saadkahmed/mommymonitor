import React from 'react';
import { connect } from 'react-redux';
import { View, Alert, StyleSheet, ImageBackground } from 'react-native';
import { Button, CardSection, Input } from '../Components/common';
import { sendForgot } from '../Actions';

const backgroundpic = require('../../pictures/BackgroundForPages.jpg');

class IForgot extends React.Component {
  componentDidUpdate() {
    if (this.props.message) {
      Alert.alert(this.props.message);
    }
  }
  state = {
    email: ''
  };

  onEmailChange(text) {
    this.setState({ email: text });
  }

  submitForgot() {
    const { email } = this.state;
    this.props.sendForgot(email);
  }

  render() {
    return (
      <ImageBackground source={backgroundpic} style={styles.backgroundImage}>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            value={this.state.email}
            label="Email"
            placeholder="JohnSmith@hotmail.com"
          />
        </CardSection>

        <View style={styles.buttonContainer}>
          <Button onPress={this.submitForgot.bind(this)}>Submit</Button>
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
  buttonContainer: {
    backgroundColor: 'transparent',
    padding: 5,
    paddingTop: 10,
    flexDirection: 'row',
    position: 'relative',
    width: 150
  }
});

const mapStateToProps = state => {
  const { message } = state.forg;
  return { message };
};

export default connect(
  mapStateToProps,
  { sendForgot }
)(IForgot);
