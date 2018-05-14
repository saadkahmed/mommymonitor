import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { UpdateInfo } from '../Actions';
import Registration from './Forms/Registration2';
//expecting date not being sent properly in values and saved
//check for error
class RegisterInfo extends Component {
    componentWillMount() {
        console.log('this is the PersonalInfo screen \n', this.props);
    }
    Registration2Submit(values) {
        this.props.UpdateInfo(values);
    }

  render() {
    return (
        <View>
          <Registration
              onSubmit={(values) => this.Registration2Submit(values)}
          />
        </View>
    );
  }
}

const mapStateToProps = state => {
 return {
     loading: state.ques.loading,
 };
};

export default connect(mapStateToProps, { UpdateInfo })(RegisterInfo);
