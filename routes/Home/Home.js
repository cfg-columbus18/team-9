import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  openDrawer = () => {
    this.props.navigation.openDrawer();
  }
  closeDrawer = () => {
    this.props.navigation.closeDrawer();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>Home</Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity onPress={this.openDrawer}>
            <View style={styles.button}>
              <Text>Open Drawer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  }
});