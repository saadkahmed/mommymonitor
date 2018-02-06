import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class Settings extends React.Component {
  render() {
    return (
      <View style={styles.Mainviewstyle}>
        <TouchableOpacity>
          <Text>press here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  Mainviewstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor: '#FFEFF9'
  },
});

export default Settings;
