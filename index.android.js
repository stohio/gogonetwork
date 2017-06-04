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
  TouchableOpacity,
  Text,
  View
} from 'react-native';

class BusinessCardElement extends Component {
    _onPressCard() {
        console.log('test')
    }
    // TODO make button take up its parent view, and same color
    render() {
        return (
            <ElevatedView elevation={3} style={styles.stayElevated}>
                <TouchableOpacity style={styles.cardButton} onPress={this._onPressCard}>
                    <Text>{this.props.cardName}</Text>
                </TouchableOpacity>
            </ElevatedView>
        );
    }
}

class BusinessCardList extends Component {
    render() {
        return (
            <View style={styles.businessCardContainer}>
                <BusinessCardElement cardName='business card 1'/>
                <BusinessCardElement cardName='business card 2'/>
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  cardButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('gogonetwork', () => gogonetwork);
