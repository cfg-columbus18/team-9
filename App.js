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
import Home from './routes/Home/Home';
import Nav from './components/Nav';

const DrawerStack = createDrawerNavigator({
  Home: Home,
}, {
  initialRouteName: 'Home',
  drawerPosition: 'left',
});

// const RootStack = createStackNavigator({
//   Root: {
//     screen: DrawerStack,
//     navigationOptions: ({ navigation }) => ({
//       headerLeft: <Icon name="bars" type="font-awesome" color="#000" size={24} iconStyle={{ marginLeft: 25 }} />,
//       headerRight: <Icon name="telephone" type="foundation" color="#ff0000" size={16} containerStyle={{ marginRight: 25 }} reverse />,  
//     })
//   }
// }, {
//   initialRouteName: 'Root',
// });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <DrawerStack />
      </View>
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
