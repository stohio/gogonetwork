/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import ElevatedView from 'react-native-elevated-view';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BusinessCardList extends Component {
    render() {
        return (
            <View style={styles.businessCardContainer}>
                <ElevatedView elevation={3} style={styles.stayElevated}>
                    <Text>business card 1</Text>
                </ElevatedView>
                <ElevatedView elevation={3} style={styles.stayElevated}>
                    <Text>business card 2</Text>
                </ElevatedView>
            </View>
        );
    }
}

export default class gogonetwork extends Component {
  render() {
    return (
        <BusinessCardList/>
    );
  }
}

const styles = StyleSheet.create({
  businessCardContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  stayElevated: {
    width: 300,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('gogonetwork', () => gogonetwork);
