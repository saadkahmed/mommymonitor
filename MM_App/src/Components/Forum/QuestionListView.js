import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import QuestionItemView from './QuestionItemView';
import { fetchAllQuestions } from '../../Actions';
import { CardSection, Input, Button, Spinner } from '../common';
import CreateQuestionView from './CreateQuestionView';

class QuestionListView extends Component {
  componentWillMount() {
    this.props.fetchAllQuestions();
  }

  state = {
    showCreateQuestion: false
  };
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
        <Modal animationType="slide" transparent visible={this.state.showCreateQuestion}>
          <CreateQuestionView
            closeWindow={() => {
              this.setState({ showCreateQuestion: false });
            }}
            navigation={this.props.navigation}
          />
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showCreateQuestion: true });
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
