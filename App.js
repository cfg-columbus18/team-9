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
import { Icon } from 'react-native-elements';
import Survey from './routes/Preferences/Survey';
import Badges from './routes/Badges/Badges';
import Appointments from './routes/Appointments/Appointments';
import Preferences from './routes/Preferences/Preferences';
import Summary from './routes/Summary/Summary';

const DrawerStack = createDrawerNavigator({
  Survey: Survey,
  Badges: Badges,
  Appointments: Appointments,
  Preferences: Preferences,
  Summary: Summary
}, {
  initialRouteName: 'Survey',
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
