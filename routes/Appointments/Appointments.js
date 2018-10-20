import React, { Component } from 'react';
import { View } from 'react-native';
import PastAppointments from './PastAppointments';
import DatePick from './DatePick';
import Nav from '../../components/Nav';
import StyleSheet from '../config/styles';

export default class Appointments extends Component {
  constructor() {
    super();

    this.state = {
      stack: 'PastAppointments'
    }
  }
  navigateToPickDate = () => {
    this.setState({ stack: 'DatePick' });
  }
  render() {
    const { stack } = this.state;
    const Navigator = stack === 'PastAppointments' ? PastAppointments : stack === 'DatePick' ? DatePick : null;
    return (
      <View style={StyleSheet.main}>
        <Nav/>
        <Navigator navigateToPickDate={this.navigateToPickDate} />
      </View>
    )
  }
}