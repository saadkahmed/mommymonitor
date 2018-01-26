import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import forgot from '../Components/forgot';
import LoggedInRouter from './LoggedInRouter.js';
import RegisterRouter from './RegisterRouter';
import MainScreen from '../Components/MainScreen';


export const RootNavigator = StackNavigator({
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

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
