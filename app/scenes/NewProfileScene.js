import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import t from 'tcomb-form-native';
import RNFS from 'react-native-fs';

var Form = t.form.Form;

var Profile = t.struct({
    profileName: t.String,
    FirstName: t.String,
    LastName: t.String,
    Title: t.maybe(t.String),
    PhoneNumber: t.maybe(t.String),
    Email: t.maybe(t.String),
    LinkedIn: t.maybe(t.String),
});

var options = {};

class NewProfileForm extends Component {
    constructor(props) {
        super (props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var value = this.refs.form.getValue();
        if (value) {
            console.log(value);
            // TODO save profile to storage
            var path = RNFS.DocumentDirectoryPath + '/' + value.profileName + '.txt';
            var vcard = 'BEGIN:VCARD\nVERSION:4.0\n' +
                'FN:' + value.Title + ' ' + value.FirstName + ' ' + value.LastName + '\n' +
                'TITLE:' + value.Title + '\n' +
                'TEL;TYPE=cell;VALUE=uri:tel:+1-' + value.PhoneNumber.slice(0,3) + '-' + value.PhoneNumber.slice(3,6) + '-' + value.PhoneNumber.slice(6) + '\n' +
                'EMAIL:' + value.Email + '\n' +
                'URL:' + value.LinkedIn + '\n' +
                'END:VCARD'

            RNFS.writeFile(path, vcard, 'utf8')
                .then((success) => {
                    console.log('FILE WRITTEN');
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Form ref="form" type={Profile} options={options}/>
                <TouchableHighlight style={styles.formButton} onPress={this.onPress}>
                    <Text style={styles.formButtonText}>Save</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

export default class NewProfileScene extends Component {
    static navigationOptions = {
        title: 'New Profile',
    };

    render() {
        return (
            <NewProfileForm/>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },

    formButton: {
        alignItems: 'flex-end',
        height: 50,
    },

    formButtonText: {
    },
});
