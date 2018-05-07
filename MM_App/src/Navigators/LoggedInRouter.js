import { DrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import SettingsPage from '../Components/Settings';

const LoggedInNavigator = DrawerNavigator(
  {
  Profile: {
    screen: ProfileAnalytics,
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: 'Settings',
      gesturesEnabled: true
    }
  },
},
{
  initialRouteName: 'Profile',
  drawerPosition: 'left',
}

);

export default LoggedInNavigator;
