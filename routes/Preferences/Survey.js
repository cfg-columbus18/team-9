 import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Alert, TouchableOpacity, Picker } from 'react-native';
import icon from 'react-native-vector-icons'

export default class Call extends Component {
  helloWorld = () => {
    Alert.alert("Hello World!");
  }
  render() {
    return (
      <View style={styles.main}>
          <Text style = {styles.welcome}>How are you feeling today?</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>{alert("you clicked me")}}>    
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2sLea7UmQDdfy2FePgXYdx9ETNRNytAvX4cJ13fuUi3mieCRWQ'}}
           />
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>{alert("you clicked me")}}>   
             <Image 
          style={{width: 50, height: 50}}
          source={{uri: 'https://cdn3.iconfinder.com/data/icons/social-productivity-black-line-3/1/31-512.png'}}
           />
            </TouchableOpacity>
               <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
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
    top:100

  },
  button: {
    width: 100,
    height: 15,
    left: 35,
    borderRadius: 4,
    borderWidth: 1.15,
    borderColor: 'red',

  },
   welcome: {
    fontSize: 14
  }
})


