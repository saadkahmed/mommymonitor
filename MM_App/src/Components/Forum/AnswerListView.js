import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
//import {} from '../Actions';
import moment from 'moment';
import { connect } from 'react-redux';
import AnswerItemView from './AnswerItemView';
import { CardSection, Input, Button, Spinner } from '../common';

class AnswerListView extends Component {
  state = {};
  componentWillMount() {
    // get answers for a specific question ID
  }
  render() {
    //dummy data
    const answers = [
      {
        date: moment().format('MMM-DD-YYYY @ h:mma'),
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        userName: 'dooodledoo',
        votes: 0
      },
      {
        date: moment().format('MMM-DD-YYYY @ h:mma'),
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        userName: 'dooodlefree',
        votes: 6
      },
      {
        date: moment().format('MMM-DD-YYYY @ h:mma'),
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        userName: 'dooodledee',
        votes: 5
      },
      {
        date: moment().format('MMM-DD-YYYY @ h:mma'),
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        userName: 'dooodledum',
        votes: 2
      }
    ];
    return (
      <ScrollView>
        {answers.map((answer, index) => {
          return <AnswerItemView key={index} answer={answer} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {}
)(AnswerListView);
