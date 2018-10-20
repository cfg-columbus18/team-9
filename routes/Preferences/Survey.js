import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Alert, TouchableOpacity, Picker } from 'react-native';
import Nav from '../../components/Nav';

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
      <View style={styles.main}>
        <Nav />
        <Text style = {styles.welcome}>How are you feeling today?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.handleFeelingSelect("happy")}>    
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2sLea7UmQDdfy2FePgXYdx9ETNRNytAvX4cJ13fuUi3mieCRWQ'}}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleFeelingSelect("meh")}>
            <Image 
              style={{width: 50, height: 50}}
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/social-productivity-black-line-3/1/31-512.png'}}
            />
          </TouchableOpacity>
          <TouchableOpacity feeling="happy" onPress={() => this.handleFeelingSelect("sad")}>    
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/pictomisc/100/sadface-512.png'}}
              />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/stylesheet
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    top: 100
  },
   welcome: {
    fontSize: 14
  }
})


