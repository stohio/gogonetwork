import React, { Component } from 'react';
import ElevatedView from 'react-native-elevated-view';
import ActionView from 'react-native-action-button';
import StackNavigator from 'react-navigation';
import {
    TouchableOpacity,
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
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
            <View flex={1}>
                <ScrollView flex={1} contentContainerStyle={styles.businessCardContainer}>
                    <BusinessCardElement cardName='business card 1' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 2' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 3' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 4' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 5' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 6' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 7' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 8' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 9' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 10' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 11' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 12' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 13' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 14' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 15' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 16' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 17' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 18' navigation={ this.props.navigation }/>
                    <BusinessCardElement cardName='business card 19' navigation={ this.props.navigation }/>
                </ScrollView>
            </View>
        );
    }
}

class AddProfileButton extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button style={styles.addProfileButton} title="Add Profile" onPress={() => {
                navigate('NewProfile');
            }}/>
        );
    }
}

export default class MainScene extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View flex={1}>
                <BusinessCardList navigation={ this.props.navigation }/>
                <AddProfileButton navigation={ this.props.navigation }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    businessCardContainer: {
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

    addProfileButton: {
        backgroundColor: '#458588',
    }
});
