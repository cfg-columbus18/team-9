import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

export default class Nav extends Component {
  render() {
    return (
      <Header backgroundColor="#fff">
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="bars" type="font-awesome" color="#000" size={32} iconStyle={{ marginLeft: 25 }} />
        </View>
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="telephone" type="foundation" color="#ff0000" size={18} containerStyle={{ marginRight: 25 }} reverse />
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})