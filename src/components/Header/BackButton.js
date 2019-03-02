import { withNavigation } from 'react-navigation'
import Touch from '../Touch';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { navigatorBar } from '../../assets/style/style';

class BackButton extends React.Component {
  render() {
    return <Touch onPress={ ()=> this.props.navigation.goBack() }>
            <View style={navigatorBar.btn}>
              <Icon 
                name={'left'}
                size={26}
                color="#60607C"
              />
            </View>
          </Touch>
  }
}

export default withNavigation(BackButton);