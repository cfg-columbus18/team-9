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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './routes/Home/Home';

const DrawerStack = createDrawerNavigator({
  Home: Home,
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
});

const RootStack = createStackNavigator({
  Root: DrawerStack
}, {
  initialRouteName: 'Root',
  navigationOptions: {
    headerLeft: <Icon name="bars" color="#000" />
  }
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
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
