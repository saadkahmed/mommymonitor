import React from 'react';
import {
  View,
  Text
} from 'react-native';

export class QuestionItemView extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
        <Text>
          {this.props.text}
        </Text>
        <Text>{this.props.votes}</Text>
      </View>
    );
  }
}
