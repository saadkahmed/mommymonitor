import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from '../common';
import { createAnswer } from '../../Actions';
import { FontAwesome } from '@expo/vector-icons';

class CreateAnswerView extends Component {
  componentWillMount() {}
  state = {
    text: ''
  };

  handleTextChange(text) {
    this.setState({ text });
  }
  handleCreateAnswer() {
    const { text } = this.state;
    const { id } = this.props.question;
    this.props.createAnswer(id, text);
    this.props.closeWindow();
  }
  render() {
    return (
      <View style={styles.createAnswer}>
        <FontAwesome name="close" size={30} onPress={this.props.closeWindow} />
        <Text>Answer Text</Text>
        <TextInput style={styles.inputStyle} onChangeText={text => this.handleTextChange(text)} />
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <Button onPress={this.handleCreateAnswer.bind(this)}> Create </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createAnswer: {
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
  const { question } = state.forum;
  return { question };
};
export default connect(
  mapStateToProps,
  { createAnswer }
)(CreateAnswerView);
