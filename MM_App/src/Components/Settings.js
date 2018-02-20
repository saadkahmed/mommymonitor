import React from 'react';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { onLogout } from '../Actions';


class Settings extends React.Component {

  static navigationOptions = {
    title: 'Settings',
    gesturesEnabled: true

};
//this logout routine hasnt been tested
onLogout() {
  this.props.onLogout();
}
  render() {
    return (
      <CardSection>
        <Button onPress={this.onLogout.bind(this)} >
          Log Out
        </Button>
      </CardSection>
    );
  }
}

const mapStateToProps = state => {
    return {
      user: state.auth.user,
      nav: state.nav,
    };
  };

export default connect(mapStateToProps, { onLogout })(Settings);
