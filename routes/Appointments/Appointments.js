import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Alert } from 'react-native';

export default class Appointments extends Component {
  openSetAppointment = () => {
    Alert.alert('SetAppointment')
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.openSetAppointment}>
          <View 
            style = {styles.button}
            onPress = {this.openSetAppointment}
            ><Text style={styles.text}>Set Next Appointment!!</Text></View>
          <Text>Last Appointment</Text>
          <Text>2018-26-10</Text>
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
    flexWrap : 'wrap',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 20
  },
  text: {
    fontSize: 15,
    color: 'red'
  }
})