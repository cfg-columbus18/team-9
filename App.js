import React, {Component} from 'react'; import { createDrawerNavigator } from 'react-navigation';
import Preferences from './routes/Preferences/Preferences';
import Survey from './routes/Preferences/Survey';
import Badges from './routes/Badges/Badges';
import Appointments from './routes/Appointments/Appointments';
import DatePick from './routes/Appointments/DatePick';
import Home from './routes/Home/Home'
import MockReader from './routes/MockReader/MockReader';
import Summary from './routes/Summary/Summary';

const DrawerStack = createDrawerNavigator({
  'Home': Home,
  'Survey': Survey,
  'Badges': Badges,
  'Appointments': Appointments,
  // 'Date Picker': DatePick,
  'Preferences': Preferences,
  'Mood Reader': MockReader,
  'Summary': Summary
});

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      points: 0,
    }
  }
  incrementPoints = () => {
    const points = this.state.points;
    this.setState({ points: points < 12 ? points + 1 : 12 });
  }
  render() {
    return (
      <DrawerStack screenProps={{ points: this.state.points, incrementPoints: this.incrementPoints }} />
    );
  }
}