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
    return quotes[Math.floor(Math.random() * Math.floor(5))]
  }

  render() {
    const quote = this.randomQuote();
    return (
      <View style = {[StyleSheet.main, {alignItems: 'center'}]}>
      <Nav/>
      <View style={[StyleSheet.container, {width: '87.5%'}]}>
        <Text style={[StyleSheet.welcome, {textAlign: 'center'}]}>Welcome</Text>
        <Text style={[StyleSheet.text, {color: '#000', textAlign: 'center'}]}>{`${quote.desc} - ${quote.author}`}</Text>
        </View>
      </View>
    )
  }
}