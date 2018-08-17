import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import QuestionItemView from './QuestionItemView';
import { fetchAllQuestions } from '../../Actions';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionListView extends Component {
  componentWillMount() {
    this.props.fetchAllQuestions();
  }
  render() {
    const questions = Object.keys(this.props.forumQuestions)
      .map(key => {
        return this.props.forumQuestions[key];
      })
      .sort((a, b) => {
        return b.votes - a.votes;
      });
    return (
      <ScrollView>
        {questions.map((question, index) => {
          return <QuestionItemView key={index} question={question} />;
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { forumQuestions } = state.forum;
  return { forumQuestions };
};

export default connect(
  mapStateToProps,
  { fetchAllQuestions }
)(QuestionListView);
