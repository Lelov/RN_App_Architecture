import React from 'react';
import {Text, View, Button} from 'react-native';

class Home extends React.Component{
  render(){

    const { navigation } = this.props;

    return (
      <View>
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="侧栏"
        />
        <Text>DrawerNavigator</Text>
      </View>
    )
  }
}

export default Home;