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
          <Text style={styles.userName}>{this.answer.user_name}</Text>
          <Text style={styles.date}>{this.answer.date}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="thumbs-up" style={styles.vote} size={30} color="blue" />
          <Entypo name="thumbs-down" style={styles.vote} size={30} color="red" />
          <CardSection>
            <Text style={styles.body}>{this.answer.text}</Text>
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
    marginLeft: 25
  },
  votes: { marginLeft: 1 },
  body: { marginLeft: 15, width: 260, color: '#2f2f2f', fontSize: 15 },
  userName: { fontSize: 20, marginLeft: 10 },
  vote: {
    marginLeft: 25
  }
});

export default AnswerItemView;
