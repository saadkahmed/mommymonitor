import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import {} from '../Actions';
import { Button } from '../Components/common';
import Registration2 from './Forms/Registration2';

class Register extends React.Component {

  static navigationOptions = {
    headerTitle: 'About you',
    gesturesEnabled: true
};

  moveToQuestionnaire() {
    const navigateToQuestionnaire = NavigationActions.navigate({
      routeName: 'Questionnaire'
    });
    this.props.navigation.dispatch(navigateToQuestionnaire);
  }
  Registration2Submit(values) {
    Alert.alert('Submitted!', JSON.stringify(values));
  }

  render() {
    return (

        <View>
          <Registration2 onSubmit={this.Registration2Submit} />
          <Button onPress={this.moveToQuestionnaire.bind(this)}>
            move to questionnaire
          </Button>
        </View>
    );
  }
}

const mapStateToProps = state => {
 return {
     state
 };
};

export default connect(mapStateToProps, {})(Register);
