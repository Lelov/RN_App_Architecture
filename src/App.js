import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { px2dp } from './utils/util.js';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>{px2dp(20)}</Text>
        <Text>Welcomeasdasdasdxczxczx</Text>
      </View>
    );
  }
}
