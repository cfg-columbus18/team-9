import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class DatePick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '2016-05-05',
            time: '20:00'
        };
      }
      render() {
        return (
        <View style={styles.main}>
            <TouchableOpacity onPress={this.openSetAppointment}>
                <Text style={styles.h1}>Select Appointment Date</Text>
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
                <Text style={styles.h1}>Select Time</Text>
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
    justifyContent: 'space-between'
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