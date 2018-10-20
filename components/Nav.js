import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Nav extends Component {
  render() {
    const left = <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="bars" type="font-awesome" color="#fff" size={32} iconStyle={{ marginLeft: 25 }} onPress={this.props.navigation.toggleDrawer} />
    </View>;
    const right = <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
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

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})