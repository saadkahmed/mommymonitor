import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import moment from 'moment';
import { fetchQuestionAnswers, selectQuestion } from './../../Actions';
import AnswerListView from './AnswerListView';
import CreateAnswerView from './CreateAnswerView';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.questionParam = this.props.navigation.state.params;
  }
  state = {
    showCreateAnswer: false
  };
  componentWillMount() {
    const { id } = this.questionParam;
    this.props.selectQuestion(this.questionParam);
    this.props.fetchQuestionAnswers(id);
  }
  render() {
    const { votes, title, text, user_name } = this.props.question;
    const { questionAnswers } = this.props;
    const ans = questionAnswers
      ? Object.keys(questionAnswers).map(key => questionAnswers[key])
      : [];
    return (
      <View>
        <Modal animationType="slide" transparent visible={this.state.showCreateAnswer}>
          <CreateAnswerView
            closeWindow={() => {
              this.setState({ showCreateAnswer: false });
            }}
            navigation={this.props.navigation}
          />
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showCreateAnswer: true });
          }}
        >
          <Text style={{ textAlign: 'right', marginRight: 3 }}>Create Answer</Text>
        </TouchableOpacity>
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
  const { question, questionAnswers } = state.forum;
  return { question, questionAnswers };
};

export default connect(
  mapStateToProps,
  { fetchQuestionAnswers, selectQuestion }
)(QuestionView);
