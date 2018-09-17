import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { deleteQuestion } from '../../Actions';

class QuestionItemView extends Component {
  deleteHandler() {
    const { user_id, id } = this.props.question;
    this.props.deleteQuestion(user_id, id);
  }

  toggleLike() {
    const { id } = this.props.question;
    this.props.toggleLike(id);
  }

  render() {
    const { date, user_name, likes, title, id } = this.props.question;
    return (
      <View style={styles.question}>
        <View style={styles.side}>
          <Text style={styles.sideText}>{likes}</Text>
          <Entypo name="thumbs-up" size={30} color="blue" onPress={this.toggleLike.bind(this)} />
          <FontAwesome name="close" size={30} onPress={this.deleteHandler.bind(this)} />
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('QuestionView', this.props.question);
            }}
          >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subBody}>
              <Text style={styles.subBodyText}>{user_name}</Text>
              <Text style={styles.subBodyText}>{date}</Text>
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
