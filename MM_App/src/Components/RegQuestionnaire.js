import React, { Component } from 'react';
import { Alert } from 'react-native';

import QuestionnaireForm from './Forms/Questionnaire';

export default class Questionnaire extends Component {
  submitQuestionnaire(values) {
    Alert.alert('Submitted!', JSON.stringify(values));
  }

  render() {
    return <QuestionnaireForm onSubmit={this.submitQuestionnaire} />;
  }
}
