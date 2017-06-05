import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './app/AppContainer'

export default class gogonetwork extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

AppRegistry.registerComponent('gogonetwork', () => gogonetwork);
