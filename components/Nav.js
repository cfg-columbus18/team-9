import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import StyleSheet from '../routes/config/styles';

class Nav extends Component {
  render() {
    const left = <View style={StyleSheet.Nav}>
      <TouchableWithoutFeedback onPress={this.props.navigation.toggleDrawer}>
        <Icon name="bars" type="font-awesome" color="#fff" size={32} iconStyle={{ marginLeft: 25 }} />
      </TouchableWithoutFeedback>
    </View>;
    const right = <View style={StyleSheet.Nav}>
      <Icon name="telephone" type="foundation" color="#ff0000" size={18} containerStyle={{ marginRight: 25 }} reverse />
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