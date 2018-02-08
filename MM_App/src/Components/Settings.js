import React from 'react';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';


class Settings extends React.Component {

  static navigationOptions = {
    title: 'Settings',
    gesturesEnabled: true

};

onLogout() {
  const { user } = this.props;


}
  render() {
    return (
      <CardSection>
        <Button onPress={this.onLogout.bind(this)} >
          Forgot Password
        </Button>
      </CardSection>
    );
  }
}

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      password: state.auth.password,
      loading: state.auth.loading,
      user: state.auth.user,
      nav: state.nav,
    };
  };

export default connect(mapStateToProps)(Settings);
