import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight
} from 'react-native';

import { QuestionItemView } from './QuestionItemView';

import {
  questionListFetch
} from '../../Actions';

const backgroundpic = require('../../../pictures/BackgroundForPages.jpg');

class QuestionListView extends React.Component {
  componentWillMount() {
    this.props.questionListFetch();
  }
  keyExtractor = (item) => String(item.id);

  renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        console.log(item.title);
      }}
    >
      <QuestionItemView>
        <View style={styles.questionItemStyle}>
          <View style={styles.titleStyle}>
            title={item.title}
          </View>

          <View style={styles.questionTextStyle}>
            text={item.text}
          </View>

          <View style={styles.votesStyle}>
            votes={item.votes}
          </View>
        </View>
      </QuestionItemView>
    </TouchableHighlight>

  )
  render() {
    return (
      <ImageBackground
        source={backgroundpic}
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1 }}>
          <FlatList
            style={styles.questionItemList}
            data={this.props.questions}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%'
  },
  questionItemList: {
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%'
  }
});

const mapStateToProps = state => {
  const questions = state.ForumQuestion.questions;
  return { questions };
};

export default connect(mapStateToProps, {
  questionListFetch
})(QuestionListView);
