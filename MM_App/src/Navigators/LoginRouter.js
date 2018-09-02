import React from 'react';
//import { connect } from 'react-redux';
// import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

import forgot from '../Components/Forgot';
import LoggedInRouter from './LoggedInRouter';
import RegisterRouter from './RegisterRouter';
import MainScreen from '../Components/MainScreen';
//import { addListener } from '../utils/redux';

export const RootNavigator = createStackNavigator({
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
        header: null
        },
  },
  LoggedInRouter: {
    screen: LoggedInRouter,
    navigationOptions: {
    },
  },
}
);

// class AppWithNavigationState extends React.Component {
//   render() {
//     const { dispatch, nav } = this.props;
//     return (
//       <RootNavigator
//         navigation={addNavigationHelpers({
//           dispatch,
//           state: nav,
//           addListener,
//         })}
//       />
//     );
//   }
// }

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
export default AppWithNavigationState;
