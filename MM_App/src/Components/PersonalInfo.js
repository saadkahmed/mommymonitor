import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {} from '../Actions';
import { Header } from '../Components/common';

class Register extends React.Component {

  static navigationOptions = {
    headerTitle: 'About you',
    gesturesEnabled: true
};

  render() {
    return (

        <View>
            <Header headerText='hello world' />
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
