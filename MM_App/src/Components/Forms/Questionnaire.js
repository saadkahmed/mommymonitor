import React from 'react';
import _ from 'lodash';
import { FlatList, Text, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { QuestionnaireFetch } from '../../Actions';
import { Button } from '../common';

class Questionnaire extends React.Component {
  componentWillMount() {
    console.log(this.props);
    this.props.QuestionnaireFetch();
  }

  keyExtractor = (item) => item.id;

  // TODO: Add check mark when user enters input
  renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.itemSubContainer}>
            <Text style={styles.questionTextStyle}>{item.text}</Text>
            <TextInput
              style={styles.inputStyle}
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
  const questions = _.map(state.Questionnaire, (val, id) => {
    return { ...val, id };
  });
  return { questions };
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
    width: '100%'
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

export default connect(mapStateToProps, { QuestionnaireFetch })(Questionnaire);
