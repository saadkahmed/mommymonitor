import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

class QuestionItemView extends Component {
  constructor(props) {
    super(props);
    this.question = this.props.question;
  }

  render() {
    const { date, user_name, votes, title, id } = this.question;
    return (
      <View style={styles.question}>
        <View style={styles.side}>
          <Text style={styles.sideText}>{votes}</Text>
          <Entypo name="thumbs-up" size={30} color="blue" />
          <Entypo name="thumbs-down" size={30} color="red" />
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              // transition to question view with this question as a param
              console.log(id);
              this.props.navigation.navigate('QuestionView', this.question);
            }}
          >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subBody}>
              <Text style={styles.subBodyText}>Created by: {user_name}</Text>
              <Text style={styles.subBodyText}>Created on: {date}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 25
  },
  body: {
    marginLeft: 10,
    marginTop: 10
  },
  side: {
    marginLeft: 10,
    marginTop: 10
  },
  sideText: {
    fontSize: 22
  },
  subBody: {
    marginTop: 5,
    marginLeft: 15
  },
  subBodyText: {
    color: '#2f2f2f',
    fontSize: 20
  }
});

export default QuestionItemView;
