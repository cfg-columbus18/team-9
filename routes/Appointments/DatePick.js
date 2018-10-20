import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import StyleSheet from '../config/styles';
import Nav from '../../components/Nav';

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

            <View style={StyleSheet.main}>
            <Nav/>
            <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Select Appointment Date</Text>
            <TouchableOpacity onPress={this.openSetAppointment}>
                <DatePicker
                    style= {StyleSheet.date}
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
            <Text style={StyleSheet.text}>Select Time</Text>
            <TouchableOpacity onPress={this.openSetAppointment}>
                <DatePicker
                    style= {StyleSheet.date}
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
            <View style={StyleSheet.button}>
            <TouchableOpacity onPress={this.navigateBack}>
            <Text style={StyleSheet.text}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>   
      </View>
    )
  }
}