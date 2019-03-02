路由信息及路由相关组件或工具js
# 安装
安装`react-navigation`及`react-native-gesture-handler`（适用expo则无需安装）
安装：`yarn add react-navigation react-native-gesture-handler`
`link依赖`：`react-native link react-native-gesture-handler`
ps: 1. 适用于`3.x`版本
  2. `rn 0.58x`安卓调试可能出现`react-native-gesture-handler`包出错,错误码`gradlew.bat installDebug`打开`android/settings.gradle`文件将`react-native-gesture-handler`引入文件那行的`\`改为`/`。

# Navigation prop
配置于导航中的页面都会提供`navigation props`,提供导航相关API
## navigate
跳转到指定页面，
```JS
this.props.navigation.navigate('RouteName', {paramName: 'value'});
```
### 传递与获取参数
```JS
// PageA.js
this.props.navigation.navigate('PageB', {
  itemId: 86,
});

// PageB.js
// 方式 1，推荐
const { navigation } = this.props;
const itemId = navigation.getParam('itemId');
// 方式 2
const itemId = navigation.state.params('itemId');
```

## navigationOptions 通用navigator设置 

## 配置原生标题栏按钮
```JS
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {

    const { navigation } = this.props;

    return {
      headerTitle: 'Home',
      headerRight: (
        <Button
          onPress={() => navigation.openDrawer()}
          title="菜单"
        />
      ),
    };
  };
  ...
}
```