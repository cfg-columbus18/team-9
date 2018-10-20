import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles';

export default class Call extends Component {
  constructor() {
    super();

    this.state = {
      feeling: null // 'happy', 'meh', 'sad'
    };
  }
  handleFeelingSelect = (feeling) => {
    this.setState({ feeling: feeling }, () => {
      if (this.state.feeling === 'sad') {
        Alert.alert("", "Phone a friend.");
      } else if (this.state.feeling === 'meh') {
        Alert.alert("", "Let's go for a walk.");
      } else if (this.state.feeling === 'happy') {
        Alert.alert("", "Meditate.");
      }
    });
  }
  render() {
    return (
      <View style={StyleSheet.main}>
        <Nav/>
        <View style = {StyleSheet.container}>
        <Text style = {StyleSheet.welcome}>How are you feeling today?</Text>
          <TouchableOpacity onPress={() => this.handleFeelingSelect("happy")}>    
            <Image
              style={StyleSheet.image}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2sLea7UmQDdfy2FePgXYdx9ETNRNytAvX4cJ13fuUi3mieCRWQ'}}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleFeelingSelect("meh")}>
            <Image 
              style={StyleSheet.image}
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/social-productivity-black-line-3/1/31-512.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity feeling="happy" onPress={() => this.handleFeelingSelect("sad")}>    
            <Image
              style={StyleSheet.image}
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/pictomisc/100/sadface-512.png'}}
              />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}