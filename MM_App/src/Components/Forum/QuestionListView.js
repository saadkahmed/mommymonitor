import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import QuestionItemView from './QuestionItemView';
import { fetchAllQuestions, deleteQuestion, toggleLike } from '../../Actions';
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
      .map(question => {
        let likeInt = 0;
        if (question.likes) {
          likeInt = Object.keys(question.likes).length;
        }
        return { ...question, likes: likeInt };
      })
      .sort((a, b) => {
        return b.likes - a.likes;
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
                deleteQuestion={this.props.deleteQuestion}
                toggleLike={this.props.toggleLike}
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
  { fetchAllQuestions, deleteQuestion, toggleLike }
)(QuestionListView);
