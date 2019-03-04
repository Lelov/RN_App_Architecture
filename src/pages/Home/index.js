import React from 'react';
import {View, Button} from 'react-native';
import PageWraper from '../../components/PageWraper';

class Home extends React.Component{
  render(){

    const { navigation } = this.props;

    return (
      <PageWraper >
        <Button
          onPress={() => navigation.navigate('DrawerNavigator')}
          title="侧栏导航"
        />
        <Button
          onPress={() => navigation.navigate('TopPage')}
          title="TopPage"
        />
        <Button 
          title="底部导航"
          onPress={ () => navigation.navigate('BottomTabNavigator') }
        />
        <Button 
          title="to Mine page"
          onPress={ () => this.props.navigation.navigate('Mine')}
        />
      </PageWraper>
    )
  }
}

export default Home;