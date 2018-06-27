import React from 'react';
import { Text } from 'react-native';

export class MessageView extends React.Component {
  render() {
    return (
      <Text>
      {this.props.text}
      </Text>
    );
  }
}

export default { MessageView };
