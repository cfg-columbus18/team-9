 import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Picker } from 'react-native';


export default class Call extends Component {
  helloWorld = () => {
    Alert.alert("Hello World!");
  }
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.helloWorld}>
          <View style={styles.button}>
            <Text style = {styles.welcome}>Call Crisis Hotline</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',

  },
  button: {
    width: 100,
    height: 15,
    left: 35,
    borderRadius: 4,
    borderWidth: 1.15,
    borderColor: 'red',

  },
   welcome: {
    fontSize: 12
  }
})







