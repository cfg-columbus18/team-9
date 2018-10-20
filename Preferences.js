import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, Picker } from 'react-native';

export default class Preferences extends Component {
state = {lang: ''}
unpdateLang = (lang) =>{
  this.setState({lang: lang})
}
state2 = {loc: ''}
unpdateLoc = (loc) =>{
  this.setState({loc: loc})
}
state3 = {color: ''}
unpdateColor = (color) =>{
  this.setState({color: color})
}
  constructor(props) {
    super(props);
    this.state = { text: 'Enter contact name' };
  }
  render() {
    return (
      <View style={styles.main}>
       
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.text}>Preferences</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textsub}> Language: </Text>
                <Picker
                     selectedValue={this.state.lang}
                     style={{ height: 50, width: 150 }}
                     onValueChange = {this.unpdateLang}
                     >
                <Picker.Item label= "English" value= "English"/>
                <Picker.Item label= "Spanish" value= "Spanish"/>
                </Picker>
            </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textsub}> Location: </Text>
                <Picker
                     selectedValue={this.state.loc}
                     style={{ height: 50, width: 150 }}
                     onValueChange = {this.unpdateLoc}
                     >
                <Picker.Item label= "County 1" value= "County 1"/>
                <Picker.Item label= "County 2" value= "County 2"/>
                </Picker>
            </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textsub}> Color: </Text>
                <Picker
                     selectedValue={this.state.color}
                     style={{ height: 50, width: 150 }}
                     onValueChange = {this.unpdateColor}
                     >
                <Picker.Item label= "Blue" value= "Blue"/>
                <Picker.Item label= "Purple" value= "Purple"/>
                <Picker.Item label= "Pink" value= "Pink"/>
                </Picker>
            </View>
            <Text style={styles.textsub}> Contacts: </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textsub}> Contact 1: </Text>
                     <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                       />
            </View>
                     <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.textsub}> Avatars: </Text>
                      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>{alert("Avatar Selected")}}>    
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'data:image/jpeg;base64,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'}}
           />
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>{alert("Avatar Selected")}}>   
             <Image 
          style={{width: 50, height: 50}}
          source={{uri: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png'}}
           />
            </TouchableOpacity>
               <TouchableOpacity onPress={()=>{alert("Avatar Selected")}}>
              <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Rabbit-512.png'}}
           />
              </TouchableOpacity>
          </View>
            </View>
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
    justifyContent: 'center'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'white'
  },
  text: {
    width:150,
    height: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
    textsub: {
    width:150,
    height: 25,
    fontSize: 15,
    color: 'black'
  },
  parent: {
    position: 'absolute',
    right: 0
  }
})