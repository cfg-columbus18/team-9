import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';
import Preferences from './routes/Preferences/Preferences';
import Survey from './routes/Preferences/Survey';
import Badges from './routes/Badges/Badges';
import Appointments from './routes/Appointments/Appointments';
import Preferences from './routes/Preferences/Preferences';

const DrawerStack = createDrawerNavigator({
  Survey: Survey,
  Badges: Badges,
  Appointments: Appointments,
  Preferences: Preferences,
}, {
  initialRouteName: 'Survey',
  drawerPosition: 'left',
});

export default class App extends Component {
  render() {
    return (
      <DrawerStack />
    );
  }
}