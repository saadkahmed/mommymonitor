import React from 'react';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { QuestionnaireFetch, answerTextChanged } from '../../Actions';
import { Button } from '../common';

const UNCHECKED_ICON = 'ios-checkmark-circle-outline';
const CHECKED_ICON = 'ios-checkmark-circle';

class Questionnaire extends React.Component {
  componentWillMount() {
    this.props.QuestionnaireFetch();
  }

  onAnswerTextChanged(id, answer) {
    this.props.answerTextChanged(id, answer);
  }

  getIconName(id) {
    if (this.props.answers[id] && this.props.answers[id].length !== 0) {
      return CHECKED_ICON;
    }
    return UNCHECKED_ICON;
  }

  keyExtractor = (item) => item.id;

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
              <View>
                <View>
                  <Text style={styles.titleStyle}>
                  {'Some quick questions to help us set up your profile'.toUpperCase()}
                  </Text>
                  {/* TODO: Randomize Questions */}
                  <FlatList
                      data={this.props.questions.slice(0, 3)}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                  />
                </View>
                <View style={styles.buttonRow}>
                  <View style={styles.buttonContainer}>
                    {/* TODO: Save answers in firebase when pressed */}
                    <Button style={styles.button}> Submit </Button>
                  </View>
                </View>

              </View>

      );
  }
}

const mapStateToProps = state => {
  const questions = _.map(state.Questionnaire.questions, (val, id) => {
    return { ...val, id };
  });
  const answers = state.Questionnaire.answers;
  return { questions, answers };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#852053',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 150
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center'
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

export default connect(mapStateToProps, { QuestionnaireFetch, answerTextChanged })(Questionnaire);
