import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Appointments from './Appointments';
import DatePick from './DatePick';

const App = createStackNavigator({
//    Appointments: { screen: Appointments },
    DatePick: { screen: DatePick },
});

export default class Home extends Component {
    render() { return ( <App/> ) }
}
