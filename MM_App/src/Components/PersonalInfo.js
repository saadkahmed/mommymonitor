import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { UpdateInfo, LoadData } from '../Actions';
import ProfileRegistration from './Forms/ProfileRegistration';

class RegisterInfo extends Component {
  componentWillMount() {
    this.props.LoadData();
  }
  Registration2Submit(values) {
    this.props.UpdateInfo({ ...values, expecting_date: values.expecting_date.toString() });
  }

  render() {
    return (
      <View>
        <ProfileRegistration onSubmit={values => this.Registration2Submit(values)} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.personalInfo.loading
  };
};

export default connect(
  mapStateToProps,
  { UpdateInfo, LoadData }
)(RegisterInfo);
