import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const mommyProfileImage = require('../../../pictures/MommyProfileImage.jpg');

export class ConversationListItem extends React.Component {
  render() {
    return (
      <View style={styles.conversationItemContainer}>
        <Image
          style={styles.mommyImageStyle}
          source={mommyProfileImage}
        />
        <View style={styles.messageTextContainer}>
          <View style={styles.mommyInfoTextStyle}>
            <Text style={styles.mommyNameStyle}>Jane Smith</Text>
            <Text style={styles.messageDateStyle}> Monday > </Text>
          </View>
          <Text style={styles.lastMessageStyle}>Hey! How are you doing?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conversationItemContainer: {
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    flexDirection: 'row'
  },
   mommyNameStyle: {
     fontWeight: 'bold',
   },
   lastMessageStyle: {
     opacity: 0.8,
   },
   mommyImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    marginLeft: 8
  },
  mommyInfoTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  messageTextContainer: {
    flex: 1
  },
  messageDateStyle: {
    opacity: 0.8,
    fontSize: 12
  }
});
