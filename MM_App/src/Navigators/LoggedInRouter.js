import { StackNavigator } from 'react-navigation';

import SomeScreen from '../Components/somescreen';

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
