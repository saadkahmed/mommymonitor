import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';
import { fetchQuestionAnswers } from './../../Actions';
import AnswerListView from './AnswerListView';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.question = this.props.navigation.state.params;
  }
  componentWillMount() {
    const { id } = this.question;
    this.props.fetchQuestionAnswers(id);
  }
  render() {
    const { votes, title, text, user_name } = this.question;
    const { questionAnswers } = this.props;
    const ans = questionAnswers
      ? Object.keys(questionAnswers).map(key => questionAnswers[key])
      : [];
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
  const { questionAnswers } = state.forum;
  return { questionAnswers };
};

export default connect(
  mapStateToProps,
  { fetchQuestionAnswers }
)(QuestionView);
