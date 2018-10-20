import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-material-ui';

export default class Badges extends Component {
  constructor() {
    super();

    this.state = {
      badges: {
        "Badge 1": {
          date: null,
          file: require("../../assets/images/badges/001-medal-47.png"),
          achieved: false,
        },
        "Badge 2": {
          date: null,
          file: require("../../assets/images/badges/026-shield-5.png"),
          achieved: false,
        },
        "Badge 3": {
          date: null,
          file: require("../../assets/images/badges/051-podium.png"),
          achieved: false,
        },
        "Badge 4": {
          date: null,
          file: require("../../assets/images/badges/076-medal-17.png"),
          achieved: false,
        },
        "Badge 5": {
          date: null,
          file: require("../../assets/images/badges/002-medal-46.png"),
          achieved: false,
        },
        "Badge 6": {
          date: null,
          file: require("../../assets/images/badges/027-diploma.png"),
          achieved: false,
        },
        "Badge 7": {
          date: null,
          file: require("../../assets/images/badges/052-medal-29.png"),
          achieved: false,
        },
        "Badge 8": {
          date: null,
          file: require("../../assets/images/badges/077-trophy-4.png"),
          achieved: false,
        },
        "Badge 9": {
          date: null,
          file: require("../../assets/images/badges/003-medal-45.png"),
          achieved: false,
        },
        "Badge 10": {
          date: null,
          file: require("../../assets/images/badges/028-trophy-16.png"),
          achieved: false,
        },
        "Badge 11": {
          date: null,
          file: require("../../assets/images/badges/053-shield-1.png"),
          achieved: false,
        },
        "Badge 12": {
          date: null,
          file: require("../../assets/images/badges/078-medal-16.png"),
          achieved: false,
        },
        // "Badge 13": {
        //   date: null,
        //   file: require("../../assets/images/badges/004-trophy-21.png"),
        //   achieved: false,
        // },
        // "Badge 14": {
        //   date: null,
        //   file: require("../../assets/images/badges/029-trophy-15.png"),
        //   achieved: false,
        // },
        // "Badge 15": {
        //   date: null,
        //   file: require("../../assets/images/badges/054-shield.png"),
        //   achieved: false,
        // },
        // "Badge 16": {
        //   date: null,
        //   file: require("../../assets/images/badges/079-medal-15.png"),
        //   achieved: false,
        // },
        // "Badge 17": {
        //   date: null,
        //   file: require("../../assets/images/badges/005-trophy-20.png"),
        //   achieved: false,
        // },
        // "Badge 18": {
        //   date: null,
        //   file: require("../../assets/images/badges/030-star.png"),
        //   achieved: false,
        // },
        // "Badge 19": {
        //   date: null,
        //   file: require("../../assets/images/badges/055-silver-medal-1.png"),
        //   achieved: false,
        // },
        // "Badge 20": {
        //   date: null,
        //   file: require("../../assets/images/badges/080-medal-14.png"),
        //   achieved: false,
        // },
        // "Badge 21": {
        //   date: null,
        //   file: require("../../assets/images/badges/006-medal-44.png"),
        //   achieved: false,
        // },
        // "Badge 22": {
        //   date: null,
        //   file: require("../../assets/images/badges/031-trophy-14.png"),
        //   achieved: false,
        // },
      }
    };
  }
  render() {
    const { badges } = this.state;
    return (
      <View style={styles.main}>
        <View style={{flex: 0.175, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: '500', fontSize: 28}}>Badges</Text>
        </View>
        <View style={styles.sub}>
          {Object.values(badges).map((badge, i) => {
            const size = 46;
            // <View style={{width: 100, backgroundColor: 'yellow', height: 50}}>
            return (
              <View key={i} style={{ padding: 15, margin: 10, backgroundColor: 'grey', borderRadius: 100, borderColor: '#000', borderWidth: 2 }}>
                <Image source={badge.file} style={{ width: size, height: size }} />
              </View>
            );
        })}
        </View>
      </View>
    )
  }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/stylesheet
  main: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  sub: {
    flex: 0.825,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
})