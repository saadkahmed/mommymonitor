import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';

import { conversationFetch } from '../../Actions';

class ConversationView extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props);
    this.props.conversationFetch();
  }

  renderItem = ({ message }) => (
    <Text> Hello World </Text>
  );

  render() {
    return (
      <Text>
      {this.props.conversationId}
      </Text>
    );
  }
}

const mapStateToProps = state => {
  // const messages = _.map(state.Chat, (val, id) => {
  //   return { ...val, id };
  // });
  const conversationId = state.Chat.conversationId;
  return { conversationId };
};

export default connect(mapStateToProps, { conversationFetch })(ConversationView);
