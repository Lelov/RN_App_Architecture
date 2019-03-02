import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../pages/BottomTabNavigator/Home';
import Mine from '../pages/BottomTabNavigator/Mine';

const tabNavigator = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
    },
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      title: '我的',
    },
  }
}

// 导出
export default createBottomTabNavigator(tabNavigator, {
  backBehavior: 'none',
});