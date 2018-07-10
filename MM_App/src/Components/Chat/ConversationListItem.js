import React from 'react';
import { Text, View } from 'react-native';

export class ConversationListItem extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.conversationId}</Text>
        <Text>{this.props.userId}</Text>
      </View>
    );
  }
}
