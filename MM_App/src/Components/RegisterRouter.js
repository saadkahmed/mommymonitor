import { TabNavigator } from 'react-navigation';

import Register from './register';

const RegisterRouter = TabNavigator(
    {
    Register: { screen: Register,
      navigationOptions: {
        headerTitle: 'Registration',
}, },

});

export default RegisterRouter;
