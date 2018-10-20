import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
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