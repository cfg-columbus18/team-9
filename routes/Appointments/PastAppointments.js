import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Nav from '../../components/Nav';
import DatePick from './DatePick';
import StyleSheet from '../config/styles';

export default class PastAppointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      LastAptDate: '2018-05-05',
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <TouchableOpacity onPress={this.props.navigateToPickDate}>
          <View style = {StyleSheet.button}>
            <Text style={StyleSheet.buttontext}>Set Next Appointment!!</Text></View>
        </TouchableOpacity>
        <Text style={StyleSheet.text}>Last Appointment</Text>
        <Text style={StyleSheet.text}>2018-26-10</Text>
      </View>
    )
  }
}