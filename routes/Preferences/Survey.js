import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles';
import Communications from 'react-native-communications';

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
        Alert.alert(
          "Phone a friend.",
          "Talking out loud about what’s going on in your head and explaining it to someone else, helps you to clarify the things that are worrying you.",
          [
            {text: "Yes", onPress: ()=>Communications.phonecall('', true)},
            {text: "No", onPress: ()=>Alert.alert("", "Maybe next time.")},
          ]
        );
      } else if (this.state.feeling === 'meh') {
        Alert.alert(
          "Let's go for a walk.",
          "Going for a walk will help you strengthen your bones and muscles, improve your mood, and improve your balance and coordination.",
          [
            {text: "Yes", onPress: ()=>Alert.alert("", "Let's make this a daily routine!")},
            {text: "No", onPress: ()=>Alert.alert("", "Maybe next time.")},
          ]
        );
      } else if (this.state.feeling === 'happy') {
        Alert.alert(
          "Meditate.",
          "Meditation helps to regulate mood and relieve stress.",
          [
            {text: "Yes", onPress: ()=>Alert.alert("", "Breathe in, and count to four. Breathe out, and count to four.")},
            {text: "No", onPress: ()=>Alert.alert("", "Maybe next time.")},
          ]
        );
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