import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList, TextInput, View, StyleSheet, TouchableHighlight, ImageBackground
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { MessageView } from './MessageView';
import {
  conversationFetch,
  messageFetch,
  onMessageTextChanged,
  sendMessage,
  currentUserFetch
} from '../../Actions';

const backgroundpic = require('../../../pictures/BackgroundForPages.jpg');

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

  onSendPressed = () => {
    if (this.props.newMessage && this.props.newMessage.length !== 0) {
      this.props.sendMessage(this.props.conversationId, this.props.newMessage);
    }
  }

  getIconName() {
    if (this.props.newMessage && this.props.newMessage.length !== 0) {
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
    <View style={styles.messageContainer}>
      <View style={this.getMessageStyle(item)}>
          <MessageView text={item.message} />
      </View>
    </View>
  );

  render() {
    return (
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >
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
          <View style={styles.iconContainer}>
            <TouchableHighlight onPress={this.onSendPressed}>
              <FontAwesome name={this.getIconName()} size={24} color="#852053" />
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8
  },
  messageContainer: {
    width: '100%',
    padding: 8
  },
  conversationList: {
    padding: 8,
  },
  inputStyle: {
    height: 30,
    fontSize: 14,
    borderColor: '#bcbcbc',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    width: '90%',
    borderRadius: 10,
    paddingLeft: 8,
    paddingRight: 8
  },
  iconContainer: {
    paddingTop: 4,
    paddingLeft: 8
  },
  selfMessage: {
    backgroundColor: '#e5c9d6',
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginRight: 8,
    marginLeft: 16,
    minHeight: 30,
    justifyContent: 'center',
    padding: 8
  },
  otherMessage: {
    backgroundColor: '#dbdbdb',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 16,
    minHeight: 30,
    justifyContent: 'center',
    padding: 8
  }
});

export default connect(mapStateToProps, { conversationFetch, messageFetch, onMessageTextChanged, sendMessage, currentUserFetch })(ConversationView);
