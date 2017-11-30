import React from 'react';
import { View, Text, } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Register from '../Login/register';

import MainScreen from './MainScreen';
import SomeScreen from '../MainScreens/somescreen';

export default class RegistrationRouter extends React.Component {
      render()
      {
        return <RegistrationTabNavigator />;
    }
}

const RegistrationTabNavigator = TabNavigator(
    {
    Register: {screen: Register},
    },
)
// navigationOptions: {
//     gesturesEnabled: false,
// },
