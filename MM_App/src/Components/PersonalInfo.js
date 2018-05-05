import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import {} from '../Actions';
import { Button } from '../Components/common';
import Registration from './Forms/Registration2';

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
    //Alert.alert('Submitted!', JSON.stringify(values));
    console.log(values);
    //console.log(this.props);
  }

  render() {
    return (

        <View style={styles.container}>
          <Registration
              onSubmit={this.Registration2Submit}
          />

          <Button onPress={this.moveToQuestionnaire.bind(this)}>
            move to questionnaire
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 7,
    backgroundColor: '#FFF'
  },
});

const mapStateToProps = state => {
    return {
      formvalues: state.form, //trying to pull form values from redux store
    };
  };

export default connect(mapStateToProps, {})(Register);
