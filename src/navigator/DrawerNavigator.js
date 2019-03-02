import { createDrawerNavigator } from 'react-navigation';

import Home from '../pages/DrawerNavigator/Home';
import Test from '../pages/DrawerNavigator/Test';

export default createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Test: {
    screen: Test,
  }
},{
  navigationOptions: {
    header: null,
  }
})