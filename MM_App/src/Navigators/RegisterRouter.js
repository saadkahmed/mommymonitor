import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import { NavigationActions } from 'react-navigation';

import Register from '../Components/Register';
import PersonalInfo from '../Components/PersonalInfo';
import PickPackage from '../Components/PickPackage';
import PickMentor from '../Components/PickMentor';

// navigationOptions: () => ({
//     gesturesEnabled: false,
//     headerTitle: 'Registration',
//     headerLeft: (
//         <TouchableHighlight
//             onPress={() => NavigationActions.navigate({ routeName: 'MainScreen' })}
//         >
//             <Text> back </Text>
//         </TouchableHighlight>
//     ) }),
const RegisterRouter = StackNavigator({
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            headerTitle: 'Registration',
            headerLeft: (
                <TouchableHighlight
                    onPress={() => navigation.navigate({ routeName: 'MainScreen' })}
                >
                    <Text> back </Text>
                </TouchableHighlight>
            ) }),
    },
    PersonalInfo: {
        screen: PersonalInfo,
        navigationOptions: {
            headerTitle: 'About you',
            gesturesEnabled: false
        }
    },
    PickPackage: {
        screen: PickPackage,
        navigationOptions: {
            title: 'Packages',
            gesturesEnabled: false
        }
    },
    PickMentor: {
        screen: PickMentor,
        navigationOptions: {
            title: 'Choose Your Mentor',
            gesturesEnabled: true
        }
    }
},
{
  initialRouteName: 'Register',
}
);

export default RegisterRouter;
