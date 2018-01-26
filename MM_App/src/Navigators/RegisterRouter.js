import { TabNavigator } from 'react-navigation';

import Register from '../Components/Register';

const RegisterRouter = TabNavigator(
    {
    Register: { screen: Register,
      navigationOptions: {
        headerTitle: 'Registration',
}, },

});

export default RegisterRouter;
