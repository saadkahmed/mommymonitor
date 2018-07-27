import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { fetchQuestion } from './../../Actions';
import AnswerListView from './AnswerListView';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionView extends Component {
  componentWillMount() {
    this.props.fetchQuestion();
  }

  render() {
    const { title, text, answers, votes, user_id } = this.props.question;
    let ans = [];
    if (answers) {
      ans = Object.keys(answers).map(key => answers[key]);
    }
    return (
      <View>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{user_id}</Text>
        <Text>{votes}</Text>
        <AnswerListView answers={ans} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  const { question } = state.forum;
  return { question };
};

export default connect(
  mapStateToProps,
  { fetchQuestion }
)(QuestionView);
