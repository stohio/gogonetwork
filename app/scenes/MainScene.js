import React, { Component } from 'react';
import ElevatedView from 'react-native-elevated-view';
import StackNavigator from 'react-navigation';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

class BusinessCardElement extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ElevatedView elevation={3} style={styles.stayElevated}>
                <TouchableOpacity style={styles.cardButton} onPress={() => {
                    navigate('NewContact', { name: this.props.cardName });
                }}>
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
                <BusinessCardElement cardName='business card 1' navigation={ this.props.navigation }/>
                <BusinessCardElement cardName='business card 2' navigation={ this.props.navigation }/>
            </View>
        );
    }
}

export default class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <BusinessCardList navigation={ this.props.navigation }/>
        );
    }
}

const styles = StyleSheet.create({
    businessCardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    },
});
