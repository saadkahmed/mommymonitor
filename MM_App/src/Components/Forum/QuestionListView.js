import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import AnswerItemView from './AnswerItemView';
import { CardSection, Input, Button, Spinner } from '../common';

class QuestionListView extends Component {
  render() {
    //dummy data
    let questions = [
      {
        date: moment().format('MMM-DD-YYYY @ h:mma'),
        title: "What is water?"
        text:"Like is it a solid, liquid or a gas?"
        userName: 'dooodledoo',
        votes: 0
      },

    ];
    questions = answers.sort((a, b) => {
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

export default QuestionListView;
