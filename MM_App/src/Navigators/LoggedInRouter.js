import { DrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import SettingsPage from '../Components/Settings';
import Questionnaire from '../Components/Forms/Questionnaire';

const LoggedInNavigator = DrawerNavigator(
  {
    Profile: {
      screen: ProfileAnalytics
    },
    Settings: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'Settings',
        gesturesEnabled: true
      }
    },
    Questionnaire: {
      screen: Questionnaire,
      navigationOptions: {
        title: 'Questionnaire',
        gesturesEnabled: true
      }
    }
  },
  {
    initialRouteName: 'Profile',
    drawerPosition: 'left'
  }
);

export default LoggedInNavigator;
