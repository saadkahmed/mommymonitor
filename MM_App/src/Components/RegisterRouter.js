import { TabNavigator } from 'react-navigation';

import Register from './Register';

const RegisterRouter = TabNavigator(
    {
    Register: { screen: Register,
      navigationOptions: {
        headerTitle: 'Registration',
}, },

});

export default RegisterRouter;
