import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles';
import Home from './Home';

export default class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      LastAptDate: '2018-05-05',
    };
  }
  
  navigateToPickDate = () => {
    this.props.navigation.navigate('DatePick')
  }

  render() {
    return (
      <View style={StyleSheet.main}>
        <Nav/>
        <View style={StyleSheet.container}>
        <TouchableOpacity onPress={this.navigateToPickDate}>
          <View style = {StyleSheet.button}
            onPress = {this.navigateToPickDate}>
            <Text style={StyleSheet.buttontext}>Set Next Appointment!!</Text></View>
          </TouchableOpacity>
          <Text style={StyleSheet.text}>Last Appointment</Text>
          <Text style={StyleSheet.text}>2018-26-10</Text>
      </View>
      </View>
    )
  }
}