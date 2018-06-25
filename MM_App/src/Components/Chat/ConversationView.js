import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { MessageView } from './MessageView';
import {
  conversationFetch,
  messageFetch,
  onMessageTextChanged,
  sendMessage,
  currentUserFetch
} from '../../Actions';

const SEND_MESSAGE_ENABLED = 'send';
const SEND_MESSAGE_DISABLED = 'send-o';

class ConversationView extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props);
    this.props.conversationFetch();
    this.props.currentUserFetch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.conversationId !== prevProps.conversationId) {
      this.props.messageFetch(this.props.conversationId);
    }
  }

  onMessageTextChanged = (text) => this.props.onMessageTextChanged(text);

  onSendPressed = () => this.props.sendMessage(this.props.conversationId, this.props.newMessage);

  getIconName() {
    if (this.props.newMessage !== undefined && this.props.newMessage.length !== 0) {
      return SEND_MESSAGE_ENABLED;
    }
    return SEND_MESSAGE_DISABLED;
  }

  getMessageStyle(item) {
    if (this.props.currentUserId === item.user) {
      return styles.selfMessage;
    }
    return styles.otherMessage;
  }

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
    <View style={this.getMessageStyle(item)}>
      <MessageView text={item.message} />
    </View>
  );

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.conversationList}
          data={this.props.messages}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            value={this.props.newMessage}
            placeholder='Write Message'
            onChangeText={(text) => this.onMessageTextChanged(text)}
          />
          <TouchableHighlight onPress={this.onSendPressed}>
            <FontAwesome name={this.getIconName()} size={32} color="#852053" />
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => {
  const messages = _.map(state.Chat.messages, (val, id) => {
    return { ...val, id };
  });
  const conversationId = state.Chat.conversationId;
  const newMessage = state.Chat.newMessage;
  const currentUserId = state.Chat.currentUserId;
  return { messages, conversationId, newMessage, currentUserId };
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    //backgroundColor: 'yellow',
    height: '100%'
  },
  inputContainer: {
    flexDirection: 'row'
  },
  messageContainer: {
    width: '100%',
    backgroundColor: 'yellow',
  },
  conversationList: {

  },
  inputStyle: {
    height: 30,
    fontSize: 14,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    width: '90%'
  },
  selfMessage: {
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: 'grey',
    alignSelf: 'flex-start',
  }

});

export default connect(mapStateToProps, { conversationFetch, messageFetch, onMessageTextChanged, sendMessage, currentUserFetch })(ConversationView);
