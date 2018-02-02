import { StackNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';

const LoggedInNavigator = StackNavigator(
    {
    SomeScreen: { screen: ProfileAnalytics,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        },
    },
    },
);

export default LoggedInNavigator;
