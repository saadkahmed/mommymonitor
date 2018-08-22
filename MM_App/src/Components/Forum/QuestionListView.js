import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
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
        return { ...this.props.forumQuestions[key], id: key };
      })
      .sort((a, b) => {
        return b.votes - a.votes;
      });
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log('pop up create question view');
          }}
        >
          <Text style={{ textAlign: 'right', marginRight: 2 }}>Create Question</Text>
        </TouchableOpacity>
        <ScrollView>
          {questions.map((question, index) => {
            return (
              <QuestionItemView
                key={index}
                question={question}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
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
