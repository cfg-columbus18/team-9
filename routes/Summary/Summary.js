import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Picker, Image } from 'react-native';


export default class Summary extends Component {
state = {lang: ''}
unpdateLang = (lang) =>{
  this.setState({lang: lang})
}

  
  render() {
    return (
      <View style={styles.main}>
       
          <View style={{flex: 1, flexDirection: 'column'}}>

            <View>
            <Text style={styles.text}>Mood Summary</Text>
            </View>
            
            <View>
            <Text style={styles.textTwo}>You completed 20 activities this month!</Text>
            </View>


             <View style={{flex: 1, flexDirection: 'column'}}>

                <View style={{flex: 1, flexDirection: 'row'}}>


              <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.first} >

                   10 Mindfullness:
                  </Text>

                   <Image
                         style={{width: 50, height: 50,
                        marginTop: 15,
                        marginLeft:35
                        }}
                       source={{uri:'https://static.thenounproject.com/png/1719734-200.png'}}
                    />
                  </View>

                  <Text style = {styles.second} >
                  
                   5 Physical Health 
                  </Text>

                  
                    <Image
                         style={{width: 50, height: 50,
                        marginTop: 40,
                        marginLeft:-4,
                        marginRight:30
                        }}
                        
                       source={{uri:'https://static.thenounproject.com/png/22912-200.png'}}
                    />
                </View>

                <View>
                  <Text style = {styles.third} >
                  
                   5 Relational Connections:
                    
                  
                  </Text>
                  <Text   style={{width: 10, height: 15, marginLeft: 135, marginTop:5}}>
                  
                    
                  
                  </Text>
                  <Image
                         style={{width: 50, height: 50,
                        marginTop: 11,
                        marginLeft: 115}}
                       source={{uri:'https://static.thenounproject.com/png/715388-200.png'}}
                    />

                </View>

                 <View style={{flex: 1, flexDirection: 'row'}}>



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
    justifyContent: 'center',
  },

  text: {
    marginLeft: 40,
    marginTop: 75,
    marginBottom:5,
    justifyContent: 'center',
    alignItems: 'center',
    width:250,
    height: 35,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },

  
  textTwo: {
    marginTop: 10,
    marginLeft: 25
    
  },

  first: {
    marginTop: 10,
    marginRight: 50,
    marginLeft: 15,
    width: 150
  },

   second: {
    marginTop: 10,
    marginRight:-120,
    marginLeft: 15,
    width: 150
  },

  third: {
    marginTop: -110,
    marginLeft:60
  },
})