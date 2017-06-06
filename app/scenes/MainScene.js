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
import RNFS from 'react-native-fs';

class ProfileCardElement extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ElevatedView elevation={3} style={styles.stayElevated}>
                <TouchableOpacity style={styles.cardButton} 
                    onPress={() => {
                        navigate('NewContact', { name: this.props.cardName });
                    }}
                    onLongPress={() => {
                        //TODO create drop down to delete or edit this profilecard
                    }}>
                    <Text>{this.props.cardName}</Text>
                </TouchableOpacity>
            </ElevatedView>
        );
    }
}

class ProfileCardList extends Component {
    addNewProfile(profileName) {
        profileList = this.state.profiles;
        profileList.push(
            <ProfileCardElement key={profileName} cardName={profileName} navigation={this.props.navigation}/>
        );
        this.setState({ profiles: profileList });
    }

    constructor(props) {
        super(props);

        this.addNewProfile = this.addNewProfile.bind(this);

        var profileList = [];
        this.state = {profiles: profileList}
        RNFS.readdir(RNFS.DocumentDirectoryPath + '/profiles')
            .then((result) => {
                result.forEach(this.addNewProfile);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    render() {
        return (
            <View flex={1}>
                <ScrollView flex={1} contentContainerStyle={styles.businessCardContainer}>
                    { this.state.profiles }
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
                <ProfileCardList ref="profileList" navigation={ this.props.navigation }/>
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
