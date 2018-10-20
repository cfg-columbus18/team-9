import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Nav from '../../components/Nav';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <View style={styles.main}>
          <Text>Test</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});