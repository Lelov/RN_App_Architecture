import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, StyleSheet } from 'react-native';
import { px2dp } from '../../utils/util';
import BackBtn from './BackButton';
import PropTypes from 'prop-types';

const IOS_NAV_BAR_HEIGHT = 44; // IOS导航栏的高度
const ANDROID_NAV_BAR_HEIGHT = 50; // ANDROID导航的高度
const STATUS_BAR_HEIGHT = 20; // 状态栏的高度

const navigatorHeight = Platform.OS === 'ios' ? IOS_NAV_BAR_HEIGHT  : ANDROID_NAV_BAR_HEIGHT;

/**
 * 底部导航栏HeaderBar由状态栏 statusBar 和 导航栏 NavigationBar 组成
 *  StatusBar API：
 *  statusBar：{
 *    hidden: Boolean值，默认为false即显示默认设置的状态栏，true则显示RN默认状态栏
 * }
 * NavigationBar API
 * title : 位于导航栏中间的名字
 * titleView : element,自定义菜单栏
 * leftBtn : 左边的按钮
 * rightBtn : 右边的按钮
 * backgroundColor : 导航栏按钮
 * color : 导航栏中间文字颜色
 */
export default class HeaderBar extends Component{
  
  getNavigationBarButtonElement(buttonElement){
    return <View style={navigationBarStyle.btn} >
      { buttonElement || null }
    </View>
  }

  render(){

    const { statusBar, titleView, titleStyle, title, backgroundColor, rightBtn, hideBackBtn, leftBtn  } = this.props;

    // 根据传递的 statusBar.hidden 值设置状态栏 statusBar
    const statusBarElement = statusBar.hidden 
                      ? null
                      : <View>
                        <StatusBar {...statusBar} />
                      </View>;

    const titleViewElement = titleView
                      ? titleView
                      : <Text style={{ fontSize: px2dp(30),fontWeight: '100',color: '#333B6C',...titleStyle }} ellipsizeMode="head" numberOfLines={1}>{title}</Text>
    const navigationBar = this.props.hidden 
                          ? null
                          : <View style={{backgroundColor: backgroundColor || '#fff' ,...navigationBarStyle.container }}>
                              {this.getNavigationBarButtonElement(hideBackBtn ? <BackBtn /> : null) }{leftBtn}
                              <View style={ navigationBarStyle.titleContainer }>{ titleViewElement }</View>
                              {this.getNavigationBarButtonElement(rightBtn)}
                            </View>

    return  <View>
              { statusBarElement }
              { navigationBar }
            </View>
  }

}

HeaderBar.propTypes={
  statusBar: PropTypes.object, 
  titleView: PropTypes.element, 
  titleStyle: PropTypes.object, 
  title: PropTypes.string, 
  backgroundColor: PropTypes.string, 
  rightBtn: PropTypes.element, 
  hideBackBtn: PropTypes.bool, 
  leftBtn: PropTypes.element,
}

HeaderBar.defaultProps={
  hideBackBtn: false,
  title: '标题',
  // 状态栏
  statusBar: {
    barStyle: 'dark-content',
    hidden: false,
    backgroundColor:'#fff',
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
  },
}

const navigationBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: navigatorHeight,
  },
  btn: {
    height: navigatorHeight,
    width: navigatorHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: navigatorHeight,
    right: navigatorHeight,
    top: 0,
    bottom: 0,
  },
})