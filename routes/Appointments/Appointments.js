import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Appointments extends Component {
  navigateToPickDate = () => {
    this.props.navigation.navigate('DatePick')
  }
  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.navigateToPickDate}>
          <View 
            style = {styles.button}
            onPress = {this.navigateToPickDate}
            ><Text style={styles.text}>Set Next Appointment!!</Text></View>
          </TouchableOpacity>
          <Text style={styles.h1}>Last Appointment</Text>
          <Text style={styles.h2}>2018-26-10</Text>
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
    padding: 10,
    margin: 20
  },
  text: {
    fontSize: 15,
    alignSelf: "center",
    color: 'white'
  },

  h1: {
    fontSize: 30,
    color: 'white'
  },

  h2: {
    fontSize: 20
  }
})