import React from 'react';
import { View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Register from '../Login/register';
import MainScreen from './MainScreen';
import IForgot from '../Login/forgot';
import SomeScreen from '../MainScreens/somescreen';

export default class Routing extends React.Component {
      render()
      {
        return <AppStackNavigator />;
    }
}

const AppStackNavigator = StackNavigator(
    {
    MainScreen: {screen: MainScreen},
    Register: {screen: Register},
    Forgot: {screen: IForgot},
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
