import { StackNavigator } from 'react-navigation';

import SomeScreen from './somescreen';

const LoggedInNavigator = StackNavigator(
    {
    SomeScreen: { screen: SomeScreen,
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        },
    },
    },
);

export default LoggedInNavigator;
