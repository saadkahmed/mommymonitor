import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const mommyProfileImage = require('../../../pictures/MommyProfileImage.jpg');
//import {} from '../Actions';
import { CardSection, Input, Button, Spinner } from '../common';

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
        <View>
          <Text style={styles.body}>{this.answer.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answer: {
    borderColor: 'grey',
    borderWidth: 1,
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
  body: { marginLeft: 50 },
  userName: { fontSize: 20, marginLeft: 10 }
});

export default AnswerItemView;
