import React from 'react';
import { View, Text, Button } from 'react-native';

class Mine extends React.Component{
  render(){
    return (
      <View>
          <Button 
            title="test to new page"
            onPress={() => this.props.navigation.navigate('New') }
          />
          <Button 
            title="test to Home page"
            onPress={() => this.props.navigation.navigate('Home') }
          />
          <Button 
            title="test to Mine page"
            onPress={() => this.props.navigation.navigate('Mine') }
          />
        <Text>
          Mine
        </Text>
      </View>
    )
  }
}

export default Mine;