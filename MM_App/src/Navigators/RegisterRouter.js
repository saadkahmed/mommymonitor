import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Register from '../Components/Register';
import PersonalInfo from '../Components/PersonalInfo';
import PickPackage from '../Components/PickPackage';
import PickMentor from '../Components/PickMentor';

const RegisterRouter = StackNavigator({
    Register: {
<<<<<<< HEAD
      screen: Register,
      navigationOptions: {
        title: 'Registration',
        //gesturesEnabled: false
    }
  },
=======
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false,
            headerTitle: 'Registration',
            headerLeft: (
                <TouchableHighlight
                    onPress={() => navigation.dispatch(NavigationActions.back())}
                >
                    <Text> back </Text>
                </TouchableHighlight>
            ) }),
    },
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
    PersonalInfo: {
        screen: PersonalInfo,
        navigationOptions: {
            headerTitle: 'About you',
<<<<<<< HEAD
            //gesturesEnabled: false
=======
            gesturesEnabled: false
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
        }
    },
    PickPackage: {
        screen: PickPackage,
        navigationOptions: {
            title: 'Packages',
<<<<<<< HEAD
            //gesturesEnabled: false
      }
  }

=======
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
>>>>>>> 47aa553d5a5e6a403ff990854b32ce10767e6bc1
},
{
  initialRouteName: 'Register',
}
);

export default RegisterRouter;
