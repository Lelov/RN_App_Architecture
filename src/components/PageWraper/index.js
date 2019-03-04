import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';

class PageWraper extends React.Component{
  render(){

    const { style, hasOwnList, children, isHideHeader, header } = this.props

    return (
      // 设定视图安全区域
      <SafeAreaView style={{flex: 1,...style}}>
        {
          isHideHeader
            ? ''
            : <Header {...header}/>
        }
        {
          hasOwnList
           ? {children}
           : <ScrollView>
              {children}
            </ScrollView>
        }
      </SafeAreaView>
    )
  }
}

PageWraper.propTypes = {
  // 容器样式
  wraperStyle: PropTypes.object,
  // 更换默认垂直滚动组件 ScrollView
  hasOwnList: PropTypes.bool,
  // 是否隐藏头部
  isHideHeader: PropTypes.bool,
  // 设置header 的style
  header: PropTypes.object,
}

PageWraper.defaultProps = {
  isHideHeader: false,
}

export default PageWraper;