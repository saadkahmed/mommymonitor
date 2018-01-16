import { StackNavigator } from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';
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

export default RootNavigator;
