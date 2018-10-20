import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Picker } from 'react-native';
import StyleSheet from '../config/styles';


export default class Call extends Component {
  render() {
    return (
      <View style={StyleSheet.main}>
        <TouchableOpacity>
          <View style={StyleSheet.button}>
            <Text style = {StyleSheet.welcome}>Call Crisis Hotline</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}