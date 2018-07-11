import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  View,
  FlatList,
  ImageBackground,
  StyleSheet
} from 'react-native';

import { ConversationListItem } from './ConversationListItem';

import {
  conversationListFetch
} from '../../Actions';

const backgroundpic = require('../../../pictures/BackgroundForPages.jpg');

class ConversationListView extends React.Component {
  componentWillMount() {
    this.props.conversationListFetch();
  }

  keyExtractor = (item) => String(item.id);

  renderItem = ({ item }) => (
    <ConversationListItem
      conversationId={item.conversationId}
      userId={item.userId}
    />
  )

  render() {
    return (
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.conversationItemList}
            data={this.props.conversations}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </ImageBackground>
    );
  }
}


const mapStateToProps = state => {
  let id = 0;
  const conversations = [];
  _.forIn(state.Chat.conversationIds, (userId, conversationId) => {
    conversations.push({ conversationId, userId, id: id++ });
  });
  return { conversations };
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%'
  },
  conversationItemList: {
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%'
  }
});

export default connect(mapStateToProps, {
  conversationListFetch
})(ConversationListView);
