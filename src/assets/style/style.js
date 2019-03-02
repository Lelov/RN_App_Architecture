import { StyleSheet, Platform } from 'react-native';
const IOS_NAV_BAR_HEIGHT = 44; // IOS导航栏的高度
const ANDROID_NAV_BAR_HEIGHT = 50; // ANDROID导航的高度
const navigatorHeight = Platform.OS === 'ios' ? IOS_NAV_BAR_HEIGHT  : ANDROID_NAV_BAR_HEIGHT

export const navigatorBar = StyleSheet.create({btn:{
  height: navigatorHeight,
  width: navigatorHeight,
  alignItems: 'center',
  justifyContent: 'center',
}})