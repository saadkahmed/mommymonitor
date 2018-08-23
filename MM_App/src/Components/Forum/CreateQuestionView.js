import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { createQuestion } from '../../Actions';

class CreateQuestionView extends Component {
  componentWillMount() {}
  state = {
    title: '',
    text: ''
  };
  handleTitleChange(title) {
    this.setState({ title });
  }
  handleTextChange(text) {
    this.setState({ text });
  }
  handleCreateQuestion() {
    const { title, text } = this.state;
    const time = moment().format('MMM DD, YYYY @ h:ma');
    this.props.createQuestion(title, text, time);
    this.props.closeWindow();
  }
  render() {
    return (
      <View style={styles.createQuestion}>
        <Text>Question Title</Text>
        <TextInput style={styles.inputStyle} onChangeText={text => this.handleTitleChange(text)} />
        <Text>Question Text</Text>
        <TextInput style={styles.inputStyle} onChangeText={text => this.handleTextChange(text)} />
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.handleCreateQuestion.bind(this)}> Create </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createQuestion: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: 'white'
  },
  inputStyle: {
    height: 50,
    fontSize: 14,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 150,
    padding: 16
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { createQuestion }
)(CreateQuestionView);
