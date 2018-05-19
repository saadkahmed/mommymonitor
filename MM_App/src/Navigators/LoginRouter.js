import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import forgot from '../Components/Forgot';
import LoggedInRouter from './LoggedInRouter.js';
import RegisterRouter from './RegisterRouter';
import MainScreen from '../Components/MainScreen';
import { addListener } from '../utils/redux';

export const RootNavigator = StackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
        header: null,
        gesturesEnabled: false,

    },
  },
  Forgot: {
    screen: forgot,
    navigationOptions: {
        gesturesEnabled: false,
        title: 'Forgot',
        },
  },
  RegisterRouter: {
    screen: RegisterRouter,
    navigationOptions: {
        gesturesEnabled: false,
        },
  },
  LoggedInRouter: {
    screen: LoggedInRouter,
    navigationOptions: {
    },
  },
initialRouteName: MainScreen,
}
);

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
