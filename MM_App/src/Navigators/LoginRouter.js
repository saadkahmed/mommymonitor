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
<<<<<<< HEAD
        //gesturesEnabled: false,
        header: null
=======
        gesturesEnabled: false,
        header: null,
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
    },
  },
  Forgot: {
    screen: forgot,
    navigationOptions: {
<<<<<<< HEAD
        //gesturesEnabled: false,
=======
        gesturesEnabled: false,
        title: 'Forgot',
        headerTitle: 'Password Retrieval',
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
    },
  },
  RegisterRouter: {
    screen: RegisterRouter,
    navigationOptions: {
<<<<<<< HEAD
        //gesturesEnabled: false,
    },
=======
        gesturesEnabled: false,
        header: null,
        },
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
  },
  LoggedInRouter: {
    screen: LoggedInRouter,
    navigationOptions: {
        //gesturesEnabled: false,
    },
  }
},
{
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
