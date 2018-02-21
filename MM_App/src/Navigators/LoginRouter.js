import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import forgot from '../Components/Forgot';
import LoggedInRouter from './LoggedInRouter.js';
import RegisterRouter from './RegisterRouter';
import MainScreen from '../Components/MainScreen';

export const RootNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
        gesturesEnabled: false,
    },
  },
  Forgot: {
    screen: forgot,
    navigationOptions: {
        gesturesEnabled: false,
    },
  },
  Register: {
    screen: RegisterRouter,
    navigationOptions: {
        gesturesEnabled: false,
    },
  },
  LoggedIn: {
    screen: LoggedInRouter,
    navigationOptions: {
        gesturesEnabled: false,
    },
  }
},
{
initialRouteName: MainScreen,
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
