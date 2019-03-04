import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class Skeleton extends React.Component {

  render(){

    const { count, loading, children, defaultSkeletonStyle, backgroundColor, circle, height, width } = this.props;

    // 检测 height 和 width 是否设定值且一致
    const isShowCircle = width != null && width === height && circle;

    // 拼装骨架屏样式
    const propsStyle = {
      backgroundColor,
      // circle 必需设定 height和width 值并且一致才会生效
      borderRadius: isShowCircle ? '50%' : 2,
      height,
      width,
    }
    const newSkeletonStyle = Object.assign(defaultSkeletonStyle, propsStyle);

    // 默认骨架屏样式
    const skeletonElement = (
      <View style={newSkeletonStyle}>
      </View>
    );

    // 设置多个骨架屏
    const skeletonElements = [];
    if(count > 1){
      for(let i=0;i<count;i++){
        skeletonElements.push(
          <View style={newSkeletonStyle} key={i}></View>
        );
      }
    }

    return (
      <>
        {
          loading
          ? count > 1 
            ? skeletonElements
            : skeletonElement
          : children
        }
        {children}
      </>
    )
  }
}

Skeleton.propTypes = {
  // 骨架屏显示的数量, 默认值为1
  count: PropTypes.number,
  // 子组件是否在 loading 状态，默认true
  loading: PropTypes.bool.isRequired,
  // 骨架屏背景颜色，默认 #f0f0f0
  backgroundColor: PropTypes.string,
  // 是否设置为圆形,默认false
  circle: PropTypes.bool,
  // 骨架屏高度,默认20
  height: PropTypes.number,
  // 骨架屏宽度， 默认父盒子的宽度
  width: PropTypes.number,
  // 默认骨架屏样式
  defaultSkeletonStyle: PropTypes.object,
}

// 骨架屏默认props值设定
Skeleton.defaultProps = {
  count: 1,
  loading: true,
  circle: false,
  height: 20,
  backgroundColor: '#f0f0f0',
  defaultSkeletonStyle: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 2,
  },
}

export default Skeleton;