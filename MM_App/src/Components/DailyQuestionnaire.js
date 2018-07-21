import React from 'react';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { QuestionnaireFetch, answerTextChanged } from './../Actions';
import { Button } from './common';

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

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
        <View style={{ backgroundColor: 'transparent' }}>
          <View style={{ paddingTop: 10 }}>
              <Image style={[{ position: 'absolute' }]} source={backgroundpic} />
          </View>
          <View>
            <View>
              <Text style={styles.titleLabelStyle}>
              {'Some quick questions to help us set up your profile'.toUpperCase()}
              </Text>

              {/* TODO: Randomize Questions */}
              <FlatList
                scrollEnabled={false}
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
    padding: 16
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

export default connect(mapStateToProps, { QuestionnaireFetch, answerTextChanged })(Questionnaire);
