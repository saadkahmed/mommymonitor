import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../pictures/MainScreen.jpg')} style={styles.backgroundImage}/>
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
