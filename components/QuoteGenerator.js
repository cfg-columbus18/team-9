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
  
  randomQuote() {
    return quotes[Math.floor(Math.random() * Math.floor(5))].desc
  }
  
  render() {
    return (
      <View>
        <Text style={{fontFamily: 'VINCHAND'}}>{this.randomQuote()}</Text>
      </View>
    )
  }
}

export default QuoteGenerator;
