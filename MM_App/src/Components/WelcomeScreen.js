import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const mainpic = require('../../pictures/MainScreen.jpg');

class WelcomeScreen extends React.Component {
  render() {
    return (
        <ImageBackground
        source={mainpic}
        style={styles.backgroundImage}
        />
    );
  }
}

let styles = StyleSheet.create({
backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
}
});

export default WelcomeScreen;
