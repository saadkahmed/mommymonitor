import React from 'react';
import { View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SomeScreen from '../MainScreens/somescreen';

export default class LoggedInRouter extends React.Component {
      render()
      {
        return <LoggedInNavigator />;
    }
}

const LoggedInNavigator = StackNavigator(
    {
    SomeScreen: {screen: SomeScreen,
        navigationOptions: {
            gesturesEnabled: false,
        },
    },
    },
    {
    headerMode: 'none',
    }
)
// navigationOptions: {
//     gesturesEnabled: false,
// },
