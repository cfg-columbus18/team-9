import React, {Component} from 'react'; import { createDrawerNavigator } from 'react-navigation';
import Preferences from './routes/Preferences/Preferences';
import Survey from './routes/Preferences/Survey';
import Badges from './routes/Badges/Badges';
import Appointments from './routes/Appointments/Appointments';
import DatePick from './routes/Appointments/DatePick';
import Home from './routes/Home/Home'
<<<<<<< HEAD

const DrawerStack = createDrawerNavigator({
  Home: Home,
  Survey: Survey,
  Badges: Badges,
  Appointments: Appointments,
  DatePick: DatePick,
  Preferences: Preferences,
}, {
  initialRouteName: 'Survey',
  drawerPosition: 'left',
=======
import MockReader from './routes/MockReader/MockReader';
import Summary from './routes/Summary/Summary';

const DrawerStack = createDrawerNavigator({
  'Home': Home,
  'Survey': Survey,
  'Badges': Badges,
  'Appointments': Appointments,
  'Date Picker': DatePick,
  'Preferences': Preferences,
  'Mood Reader': MockReader,
  'Summary': Summary
>>>>>>> d89a37560fe5e70f96ce2092343cfaa50b1270e4
});

export default class App extends Component {
  render() {
    return (
      <DrawerStack />
    );
  }
}