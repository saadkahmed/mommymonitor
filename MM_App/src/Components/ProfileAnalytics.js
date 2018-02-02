import React from 'react';
import { View, Text } from 'react-native';

class ProfileAnalytics extends React.Component {

  static navigationOptions = {
  title: 'My Profile', // this needs to recieve a name prop
};

render() {
  return (
    <View>
      <Text>hello</Text>
    </View>
    );
  }
}
export default ProfileAnalytics;
