import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { UpdateInfo, LoadData } from '../Actions';
import Registration from './Forms/Registration2';
//expecting date not being sent properly in values and saved
//check for error
class RegisterInfo extends Component {
    componentWillMount() {
        //console.log('this is the PersonalInfo screen \n', this.props);
        //load previous data into form
        //should we have unique keys for user info? is this really needed?
        this.props.LoadData();
    }
    Registration2Submit(values) {
        this.props.UpdateInfo({ ...values, expecting_date: values.expecting_date.toString() });
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

export default connect(mapStateToProps, { UpdateInfo, LoadData })(RegisterInfo);
