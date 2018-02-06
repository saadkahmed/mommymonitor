import { DrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import Settings from '../Components/Settings';

const LoggedInNavigator = DrawerNavigator(
    {
    ProfileLandingScreen: { screen: ProfileAnalytics,
        navigationOptions: {
            title: 'Profile',
            drawerLabel: 'Your Profile',
            gesturesEnabled: false,
            // header: null // *** Un-Comment this when done working on this page
            // back button is handy when testing
        },
    SettingsScreen: { screen: Settings,
        navigationOptions: {
            title: 'Settings',
            drawerLabel: 'Settings',
            gesturesEnabled: false,
      },

    }
    },
    },
);

export default LoggedInNavigator;
