import React from 'react';
import _ from 'lodash';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { QuestionnaireFetch } from '../../Actions';
import { Input } from '../common';

class Questionnaire extends React.Component {
  componentWillMount() {
    console.log(this.props);
    this.props.QuestionnaireFetch();
  }

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
        <View style={styles.MainContainer}>
          <View style={styles.SubContainer}>
              <View>
                <Text>{item.text}</Text>
              </View>
              {/*TODO: add textinput for answer*/}
          </View>
        </View>
  );

  render() {
      return (
              <FlatList
                  data={this.props.questions}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
              />
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
  MainContainer: {
    padding: 5,
  },
  SubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  }
});

export default connect(mapStateToProps, { QuestionnaireFetch })(Questionnaire);
