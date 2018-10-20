import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';

export default class Template extends Component {
  helloWorld = () => {
    Alert.alert("Hello World!");
  }
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.helloWorld}>
          <View style={styles.button}>
            <Text>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/stylesheet
  main: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'green'
  }
})