import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CardSection, Input, Button, Spinner } from '../common';
const mommyProfileImage = require('../../../pictures/MommyProfileImage.jpg');

class AnswerItemView extends Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
  }

  render() {
    const { votes, user_name, date, text } = this.answer;
    return (
      <View style={styles.answer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.votes}>{votes}</Text>
          <Image style={styles.mommyImageStyle} source={mommyProfileImage} />
          <Text style={styles.userName}>{user_name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="thumbs-up" style={styles.vote} size={30} color="blue" />
          <CardSection>
            <Text style={styles.body}>{text}</Text>
          </CardSection>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answer: {
    margin: 5,
    flex: 1
  },
  mommyImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10
  },
  date: {
    marginLeft: 5,
    fontSize: 12
  },
  votes: { marginLeft: 1 },
  body: { marginLeft: 15, width: 260, color: '#2f2f2f', fontSize: 15 },
  userName: { fontSize: 20, marginLeft: 10 },
  vote: {
    marginLeft: 25
  }
});

export default AnswerItemView;