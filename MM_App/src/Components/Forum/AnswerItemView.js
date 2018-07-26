import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { CardSection, Input, Button, Spinner } from '../common';
//import {} from '../Actions';
const mommyProfileImage = require('../../../pictures/MommyProfileImage.jpg');

class AnswerItemView extends Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
  }

  render() {
    return (
      <View style={styles.answer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.votes}>{this.answer.votes}</Text>
          <Image style={styles.mommyImageStyle} source={mommyProfileImage} />
          <Text style={styles.userName}>{this.answer.userName}</Text>
          <Text style={styles.date}>{this.answer.date}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="thumbs-up" style={styles.up} size={30} color="blue" />
          <Text style={styles.body}>{this.answer.text}</Text>
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
    marginLeft: 30
  },
  votes: { marginLeft: 2 },
  body: { marginLeft: 25, width: 290, color: '#2f2f2f' },
  userName: { fontSize: 20, marginLeft: 10 },
  up: {
    marginLeft: 25
  }
});

export default AnswerItemView;
