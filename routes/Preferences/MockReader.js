import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, Picker } from 'react-native';

export default class MockReader extends Component {
  constructor() {
    super();

    this.state = {
      analyzing: "Analyzing mood now..."
      
    }
    this.state2 = {
      photo: ""
    }
  }
  unpdatemood = (analyzing) =>{
  this.setState({analyzing: analyzing})
}
unpdateread = () =>{
  this.setState({analyzing: "Mood Detected:"})
  this.setState({photo: 'https://cdn3.iconfinder.com/data/icons/social-productivity-black-line-3/1/31-512.png'})
}
  render() {
    return (
      <View style={styles.main}>
       
          <TouchableOpacity onPress={this.unpdateread}>
          <View>
           
            <Text style = {styles.text}>{this.state.analyzing}</Text>

             <Image 
          style={{width: 100, height: 100}}
          source={{uri: this.state.photo }}
           />
          </View>
        </TouchableOpacity>     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/stylesheet
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center'
    //top:200
  },
  text: {
   // width:350,
   // height: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
    
  }
})