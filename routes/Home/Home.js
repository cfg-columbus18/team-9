import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles'

export default class Test extends Component {
  render() {
    return (
      <View style = {StyleSheet.main}>
      <Nav/>
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.welcome}>Welcome Back</Text>
        </View>
      </View>
    )
  }
}