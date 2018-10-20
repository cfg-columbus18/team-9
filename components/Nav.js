import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Communications from 'react-native-communications';
import { Button, Icon, Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import StyleSheet from '../routes/config/styles';

class Nav extends Component {
  callCrisisHotline = () => {
    Communications.phonecall('1-440-260-8595', true);
  }
  render() {
    const left = <View style={StyleSheet.Nav}>
      <TouchableWithoutFeedback onPress={this.props.navigation.toggleDrawer}>
        <Icon name="bars" type="font-awesome" color="#fff" size={32} iconStyle={{ marginLeft: 25 }} />
      </TouchableWithoutFeedback>
    </View>;
    const right = <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    {/* <Icon name="telephone" type="foundation" color="#ff0000" size={18} containerStyle={{ marginRight: 25 }} reverse /> */}
      <Button icon={{name: 'telephone', type: 'foundation', color: '#fff'}} buttonStyle={{ backgroundColor: '#ff0000' }} textStyle={{ fontWeight: '900' }} title="Crisis" borderRadius={10} onPress={this.callCrisisHotline} />
    </View>;
    return (
      <Header 
        outerContainerStyles={{width: '100%', backgroundColor: '#333333'}}
        leftComponent={left}
        rightComponent={right}
      />
    );
  }
}

export default withNavigation(Nav);