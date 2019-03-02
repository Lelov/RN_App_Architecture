import React, { PureComponent, Component } from 'react';
import { TouchableNativeFeedback, Platform, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { px2dp } from '../../utils/util';

export default class Touch extends PureComponent{
  render(){

    const { onPress, style, backgroundPropType, activeOpacity, disabled } = this.props;
  
    return Platform.OS === 'ios'
            ? <TouchableOpacity
                activeOpacity={activeOpacity || .8}
                disabled={disabled || false}
                onPress={() => onPress && onPress()}
                style={style}
              >
                { this.props.children }
              </TouchableOpacity>
            : <TouchableNativeFeedback
                onPress={() => onPress && onPress()}
                style={style}
                disabled={disabled || false}
                backgroundPropType={ backgroundPropType }
              >
                { this.props.children }
            </TouchableNativeFeedback>
  }
}

export class Button extends Component{
  render(){

    const { onPress, style, backgroundPropType, activeOpacity, disabled, children, title, btnStyle, textStyle, position } = this.props;

    const defaultBtn = (
      <View style={ btnStyle || styles.btnStyle }>
        <Text style={ textStyle || styles.textStyle }> { title } </Text>
      </View>
    );
  
    return Platform.OS === 'ios'
            ? <TouchableOpacity
                activeOpacity={activeOpacity || .8}
                disabled={disabled || false}
                onPress={() => onPress && onPress()}
                style={style}
              >
                { 
                  children
                    ? children
                    : defaultBtn
                }
              </TouchableOpacity>
            : <View style={{overflow: 'hidden', height: (btnStyle && btnStyle.height) || styles.btnStyle.height, width: (btnStyle && btnStyle.width) || styles.btnStyle.width, borderRadius: (btnStyle && btnStyle.borderRadius) || styles.btnStyle.borderRadius, ...position }}>
                <TouchableNativeFeedback
                  onPress={() => onPress && onPress()}
                  style={style}
                  disabled={disabled || false}
                  backgroundPropType={ backgroundPropType }
                >
                  { 
                    children
                      ? children
                      : defaultBtn
                  }
              </TouchableNativeFeedback>
            </View>

  }
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#3D71F5',
    textAlign: 'center',
    width: px2dp(660),
    height: px2dp(100),
    borderRadius: px2dp(10),
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: px2dp(30),
    fontWeight: '500',
  }
})