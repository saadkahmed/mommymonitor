import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import { MessageView } from './MessageView';
import { conversationFetch } from '../../Actions';

class ConversationView extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props);
    this.props.conversationFetch();
  }

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
    <MessageView text={item.text} />
  );

  render() {
    return (
      <FlatList
        data={this.props.messages}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

const mapStateToProps = state => {
  const messages = [{ text: 'Hello World!', id: 0 }, { text: 'Hi there!', id: 1 }];
  const conversationId = state.Chat.conversationId;
  return { messages, conversationId };
};

export default connect(mapStateToProps, { conversationFetch })(ConversationView);
