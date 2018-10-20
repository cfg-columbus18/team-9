import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class DatePick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '2016-05-05',
            time: '20:00'
        };
      }

      navigateBack = () => {
        this.props.navigation.navigate.goBack()
      }
            
      render() {
        return (
        <View style={styles.main}>
            <Text style={styles.h1}>Select Appointment Date</Text>
            <TouchableOpacity onPress={this.openSetAppointment}>
                <DatePicker
                    style= {styles.date}
                    date = {this.state.date}
                    mode = 'date'
                    placeholder={this.state.date}
                    format = "YYYY-MM-DD"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({date:date})} 
                }
                />
            </TouchableOpacity>
            <Text style={styles.h1}>Select Time</Text>
            <TouchableOpacity onPress={this.openSetAppointment}>
                <DatePicker
                    style= {styles.date}
                    time = {this.state.time}
                    mode = 'time'
                    placeholder={this.state.time}
                    format = "HH:mm"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(time) => {this.setState({time:time})} 
                }
                />
            </TouchableOpacity> 
            <View style={styles.button}>
            <TouchableOpacity onPress={this.navigateBack}>
            <Text style={styles.text}>Submit</Text>
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
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
      width: 200,
  },
  button: {
    flexWrap : 'wrap',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  text: {
    fontSize: 15,
    alignSelf: "center",
    color: 'red'
  },

  h1: {
    fontSize: 30,
    color: 'white'
  },

  h2: {
    fontSize: 20
  }
})