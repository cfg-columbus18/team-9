/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Preferences from './routes/Preferences/Preferences';

const DrawerStack = createDrawerNavigator({
  Preferences: Preferences,
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
});

export default class App extends Component {
  render() {
    return (
      <DrawerStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
