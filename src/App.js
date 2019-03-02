import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import TopPage from './pages/TopPage';
import BottomTabNavigator from './navigator/BottomTabNavigator';
import DrawerNavigator from './navigator/DrawerNavigator';

export default createAppContainer(createStackNavigator({
  // 主页面
  Home: {
    screen: Home,
  },
  TopPage: {
    screen: TopPage,
  },
  // 侧栏抽屉导航
  DrawerNavigator: {
    screen: DrawerNavigator,
  },
  // 底部导航
  BottomTabNavigator: {
    screen: BottomTabNavigator,
  },
}))
