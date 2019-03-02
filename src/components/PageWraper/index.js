import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header';

class PageWraper extends React.Component{
  render(){

    const { style, hasOwnList, children, isHideHeader, header } = this.props

    return (
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
  wraperStyle: PropTypes.object,
  hasOwnList: PropTypes.bool,
  isShowHeader: PropTypes.bool,
  header: PropTypes.object,
}

PageWraper.defaultProps = {
  isShowHeader: false,
}

export default PageWraper;