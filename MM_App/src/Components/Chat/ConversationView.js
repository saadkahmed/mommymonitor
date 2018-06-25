import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import { MessageView } from './MessageView';
import { conversationFetch, messageFetch } from '../../Actions';


class ConversationView extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props);
    this.props.conversationFetch();
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
    if (this.props.conversationId !== prevProps.conversationId) {
      this.props.messageFetch(this.props.conversationId);
    }
  }

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
    <MessageView text={item.message} />
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
  const messages = _.map(state.Chat.messages, (val, id) => {
    return { ...val, id };
  });
  const conversationId = state.Chat.conversationId;
  return { messages, conversationId };
};

export default connect(mapStateToProps, { conversationFetch, messageFetch })(ConversationView);
