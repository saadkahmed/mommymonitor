import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import forgot from '../Components/Forgot';
import LoggedInRouter from './LoggedInRouter.js';
import RegisterRouter from './RegisterRouter';
import MainScreen from '../Components/MainScreen';


export const RootNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  },
  Forgot: {
    screen: forgot
  },
  Register: {
    screen: RegisterRouter,
  },
  LoggedIn: {
    screen: LoggedInRouter
  }

},
{
initialRouteName: MainScreen,
}
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
