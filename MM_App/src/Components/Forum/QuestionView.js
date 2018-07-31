import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

class Forum extends React.Component {
  render() {
    return (
      <View>
        <Text> Question Title </Text>
        <Text> Question content </Text>

        <TextInput
        />
      </View>
    );
  }
}
