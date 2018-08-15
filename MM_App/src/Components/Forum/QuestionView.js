import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';
import { fetchQuestion } from './../../Actions';
import AnswerListView from './AnswerListView';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionView extends Component {
  componentWillMount() {
    this.props.fetchQuestion();
  }

  render() {
    const { title, text, answers, votes, owner } = this.props.question;
    const ans = answers ? Object.keys(answers).map(key => answers[key]) : [];
    const user_name = owner ? owner.user_name : '';
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.votes}>{votes}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.userName}>Created By: {user_name}</Text>
        <AnswerListView answers={ans} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginLeft: 5
  },
  votes: {
    marginLeft: 2,
    fontSize: 20
  },
  text: {
    marginLeft: 22,
    marginTop: 5,
    fontSize: 16
  },
  userName: {
    marginTop: 5,
    marginLeft: 25,
    fontSize: 15
  }
});

const mapStateToProps = state => {
  const { question } = state.forum;
  return { question };
};

export default connect(
  mapStateToProps,
  { fetchQuestion }
)(QuestionView);
