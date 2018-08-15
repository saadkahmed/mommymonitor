import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import AnswerItemView from './AnswerItemView';
import { CardSection, Input, Button, Spinner } from '../common';

class AnswerListView extends Component {
  render() {
    //dummy data
    const answers = this.props.answers.sort((a, b) => {
      return b.votes - a.votes;
    });
    return (
      <ScrollView style={{ marginTop: 10 }}>
        {answers.map((answer, index) => {
          return <AnswerItemView key={index} answer={answer} />;
        })}
      </ScrollView>
    );
  }
}

export default AnswerListView;
