import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import quotes from '../../sample-quotes.js';

class QuoteGenerator extends Component {
  constructor() {
    super();
    
    this.state = {
      quotes: quotes
    }
  } 
  
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

export default QuoteGenerator;
