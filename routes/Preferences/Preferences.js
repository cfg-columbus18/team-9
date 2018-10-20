import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Picker, Image } from 'react-native';
import Nav from '../../components/Nav';

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
          <Nav />
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
            <Text style={styles.textsub}> Avatars: </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
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
              <TouchableOpacity onPress={()=>{alert("Avatar Selected")}}>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Pig-512.png'}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{alert("Avatar Selected")}}>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: 'data:image/jpeg;base64,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'}}
                />
              </TouchableOpacity>
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