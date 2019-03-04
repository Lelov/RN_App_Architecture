import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
/**
 * 按钮组件
 */
class Touch extends React.Component{
  
  render(){

    const {onPress, loadingIcon, loading, title, disabled, backgroundColor, color, fontSize, titleStyle, wrapperStyle, height, width  } = this.props;
    // wrapperStyle
    const wrapperDefaultStyle = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginLeft: 5,
      marginRight: 5,
    }

    const defaultLoadingIcon = {
      backgroundColor: '#fff',
      ...loadingIcon,
    }
    return (
      <TouchableOpacity onPress={() => onPress && onPress()} style={{opacity: disabled || loading ? .9 : 1,width,backgroundColor,height,...wrapperDefaultStyle,...wrapperStyle}} disabled={disabled || loading} activeOpacity={.8}>
        {
          loading
            ? <svg version="1.1" x="0" y="0" width="30" height="30" viewBox="0 0 50 50">
                  <path fill={defaultLoadingIcon.backgroundColor} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
            : null
        }
        <Text style={{ color, fontSize, ...titleStyle}}>
          { loading ? `${title}中...` : title }
        </Text>
      </TouchableOpacity>
    )
  }
}

Touch.propTypes = {
  // 按钮标题
  title: PropTypes.string,
  // 标题颜色，默认#fff
  color: PropTypes.string,
  // 标题字号大小,默认14
  fontSize: PropTypes.number,
  // 按钮大小，可取值 small, normal （默认）, large
  // size: PropTypes.oneOf(['small', 'normal', 'large']),
  // 按钮背景颜色，默认 #1a73e8
  backgroundColor: PropTypes.string,
  // 按钮高度，默认36
  height: PropTypes.number,
  // 按钮宽度,默认90
  width: PropTypes.number,
  // 是否在loading状态，默认false
  loading: PropTypes.bool,
  // 是否禁用按钮，默认false
  disabled: PropTypes.bool,
  // 标题的样式。默认null
  titleStyle: PropTypes.object,
  // 标题容器的样式。默认null 
  wrapperStyle: PropTypes.object,
  // iconStyle
  loadingIcon: PropTypes.object,
  // 按钮点击事件
  onPress: PropTypes.func,
}

Touch.defaultProps = {
  title: '按钮',
  size: 'normal',
  color: '#fff',
  fontSize: 14,
  backgroundColor: '#1a73e8',
  borderRadius: 4,
  loading: false,
  disabled: false,
  titleStyle: null,
  wrapperStyle: null,
  height: 36,
  width: 90,
}

export default Touch;