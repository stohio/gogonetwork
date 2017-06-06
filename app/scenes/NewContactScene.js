import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import t from 'tcomb-form-native';
import RNFS from 'react-native-fs';
// import NativeModules from 'NativeModules';
// 
// const LinkingManager = Platform.OS === 'android' ? NativeModules.IntentAndroid : NativeModules.LinkingManager;
var Mailer = require('NativeModules').RNMail;

var Form = t.form.Form;

var Profile = t.struct({
    PhoneNumber: t.String,
});

var options = {};

class PhoneInputBox extends Component {
    constructor(props) {
        super (props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var value = this.refs.newContactForm.getValue();
        if (value) {
            console.log(RNFS.DocumentDirectoryPath + '/profiles/' + this.props.profileName + '.vcard');
            Mailer.mail({
                subject: 'test',
                recipients: ['mroseman95@gmail.com'],
                body: '',
                attachement: {
                    path: RNFS.DocumentDirectoryPath + '/profiles/' + this.props.profileName + '.vcard',
                    type: 'vcard',
                    name: this.props.profileName + '.vcard',
                }
            }, (error, event) => {
                if (error) {
                    console.log('could not send email');
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.phoneInputForm}>
                <Form ref="newContactForm" type={Profile} options={options}/>
                <TouchableHighlight style={styles.formButton} onPress={this.onPress}>
                    <Text style={styles.formButtonText}>Send</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default class NewContactScene extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
    });
    render() {
        const { navigate }  = this.props.navigation;
        return (
            <PhoneInputBox profileName={this.props.navigation.state.params.name}/>
        );
    }
}

const styles = StyleSheet.create({
    phoneInputForm: {
        flex: 1,
        flexDirection: 'column',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    // phoneInputField: {
    //     backgroundColor: 'white',
    // },

    // phoneInputText: {
    //     color: 'black',
    //     fontSize: 50,
    //     textAlign: 'center',
    // }
});
