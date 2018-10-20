import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles'
import quotes from '../../sample-quotes.js';

export default class Test extends Component { 
  constructor(props) {
  super();
  
  this.state = {
    quotes: quotes
  }
}
  randomQuote() {
    return quotes[Math.floor(Math.random() * Math.floor(5))].desc
  }

  render() {
    return (
      <View style = {StyleSheet.main}>
      <Nav/>
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.welcome}>Welcome</Text>
        <Text style={StyleSheet.text}>{this.randomQuote()}</Text>
        </View>
      </View>
    )
  }
}