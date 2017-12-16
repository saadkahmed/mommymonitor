import React from 'react';
//import { View, Text, } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Register from './register';

//mport MainScreen from './MainScreen';
//import SomeScreen from './somescreen';

class RegistrationRouter extends React.Component {
      render() {
        return <RegistrationTabNavigator />;
    }
}

const RegistrationTabNavigator = TabNavigator(
    {
    Register: { screen: Register },
    },
);
export default RegistrationRouter;
