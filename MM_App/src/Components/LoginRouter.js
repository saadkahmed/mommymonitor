import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import forgot from './Forgot';
import LoggedInRouter from './LoggedInRouter.js';
import RegisterRouter from './RegisterRouter';

const RootNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    },
  },

  Forgot: {
    screen: forgot,
    navigationOptions: {
      headerTitle: 'Forgot a Password',
    },
  },

  Register: {
    screen: RegisterRouter,
  },

  LoggedIn: {
    screen: LoggedInRouter,
  }

});
/*
class RootNavigation extends Component {
    render() {
        const { nav, dispatch } = this.props;
        return (
            <RootNavigator
                navigation={addNavigationHelpers({ dispatch, state: nav })}
            />
        );
    }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});
*/
export default RootNavigator;
