import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Details from '~/pages/Details';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      screen: createStackNavigator(
        {
          Details,
        },
        {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        },
      ),
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
