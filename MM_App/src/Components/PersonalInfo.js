import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { UpdateInfo } from '../Actions';
import Registration from './Forms/Registration2';

class RegisterInfo extends Component {
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
     loading: state.ques.loading,
 };
};

export default connect(mapStateToProps, { UpdateInfo })(RegisterInfo);
