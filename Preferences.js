import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Picker } from 'react-native';

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