import React from 'react';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { QuestionnaireFetch, answerTextChanged, sendAnswers } from './../Actions';
import { Button } from './common';

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

const UNCHECKED_ICON = 'ios-checkmark-circle-outline';
const CHECKED_ICON = 'ios-checkmark-circle';

class DailyQuestionnaire extends React.Component {
  componentWillMount() {
    this.props.QuestionnaireFetch();
  }

  onAnswerTextChanged(id, answer) {
    this.props.answerTextChanged(id, answer);
  }

  onSubmitPressed = () => {
    this.props.sendAnswers(this.props.answers);
    this.props.onSubmit();
  }

  getIconName(id) {
    if (this.props.answers[id] && this.props.answers[id].length !== 0) {
      return CHECKED_ICON;
    }
    return UNCHECKED_ICON;
  }

  keyExtractor = (item) => String(item.id);

  renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Ionicons name={this.getIconName(item.id)} size={32} color="#852053" />
          <View style={styles.itemSubContainer}>
            <Text style={styles.questionTextStyle}>{item.text}</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.onAnswerTextChanged(item.id, text)}
            />
          </View>
        </View>
  );

  render() {
      return (
            <View style={styles.questionnaireContainer}>
              <View>
                <Text style={styles.titleLabelStyle}>
                {'Some quick questions to help us set up your profile'.toUpperCase()}
                </Text>
              </View>
              <View>
                <FlatList
                    data={this.props.questions}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
              </View>
                <View style={styles.buttonRow}>
                  <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.onSubmitPressed}> Submit </Button>
                  </View>
                </View>
              </View>

      );
  }
}

const mapStateToProps = state => {
  const questions = state.Questionnaire.questions;
  const answers = state.Questionnaire.answers;
  return { questions, answers };
};

const styles = StyleSheet.create({
  questionnaireContainer: {
    backgroundColor: 'white',
    margin: 25,
    borderRadius: 4,
    borderColor: 'black',
    paddingTop: 10,
  },
  titleLabelStyle: {
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 20,
    color: '#00bbdd',
    fontFamily: 'fjalla-one',
    textAlign: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 150,
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemContainer: {
    padding: 16,
    flexDirection: 'row'
  },
  itemSubContainer: {
    paddingLeft: 8,
    flex: 1,
    alignSelf: 'stretch'
  },
  inputStyle: {
    height: 50,
    fontSize: 14,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    width: '100%'
  },
  questionTextStyle: {
    color: '#565656',
    fontWeight: '500',
    paddingBottom: 8
  }
});

export default connect(mapStateToProps, {
  QuestionnaireFetch,
  answerTextChanged,
  sendAnswers
})(DailyQuestionnaire);
