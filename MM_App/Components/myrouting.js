import React from 'react';
import { View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import IForgot from '../Login/forgot';

import RegistrationRouter from './RegistrationRouter.js';
import LoggedInRouter from './LoggedInRouter.js';

export default class Routing extends React.Component {
      render()
      {
        return <AppStackNavigator />;
    }
}

const AppStackNavigator = StackNavigator(
    {
    MainScreen: {screen: MainScreen},
    Register: {screen: RegistrationRouter},
    Forgot: {screen: IForgot},
    LoginPage: {screen: LoggedInRouter,
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
