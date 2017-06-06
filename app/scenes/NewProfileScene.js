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
});

var options = {};

function writeVCardToFile(path, vcard) {
    RNFS.writeFile(path, vcard, 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN');
        })
        .catch((err) => {
            console.log(err);
        });
}

function createProfilesDirAndWriteVCardToFile(path, vcard) {
    RNFS.mkdir(profilesPath)
        .then((success) => {
            writeVCardToFile(path, vcard);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

function saveVCard(filename, vcard) {
    var profilesPath = RNFS.DocumentDirectoryPath + '/profiles';
    var filePath = RNFS.DocumentDirectoryPath + '/profiles/' + filename + '.vcard';

    // Check to see if there is a file/directory named profiles
    RNFS.exists(profilesPath)
        .then((exists) => {
            if (exists) {
                // Check to see if the profiles file/directory is a file or a directory
                RNFS.stat(profilesPath)
                    .then((stat) => {
                        if (stat.isDirectory()) {
                            writeVCardToFile(filePath, vcard);
                        } else {
                            // if it is a file delete it and make a directory in its place
                            RNFS.unlink(profilesPath)
                                .then((success) => {
                                    createProfilesDirAndWriteVCardToFile(filePath, vcard);
                                })
                                .catch((err) => {
                                    console.log(err.message);
                                });
                        }
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else {
                createProfilesDirAndWriteVCardToFile(filePath, vcard);
            }
        })
        .catch((err) => {
            console.log(err.message);
        });

}

class NewProfileForm extends Component {
    constructor(props) {
        super (props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var value = this.refs.newProfileForm.getValue();
        if (value) {
            var vcard = 'BEGIN:VCARD\nVERSION:4.0\n' +
                'FN:' + value.Title + ' ' + value.FirstName + ' ' + value.LastName + '\n' +
                'TITLE:' + value.Title + '\n' +
                'TEL;TYPE=cell;VALUE=uri:tel:+1-' + value.PhoneNumber.slice(0,3) + '-' + value.PhoneNumber.slice(3,6) + '-' + value.PhoneNumber.slice(6) + '\n' +
                'EMAIL:' + value.Email + '\n' +
                'URL:' + value.LinkedIn + '\n' +
                'END:VCARD'

            saveVCard(value.profileName, vcard);
            // TODO find some way to pass the fact that there is a new profile back to the main Scene
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Form ref="newProfileForm" type={Profile} options={options}/>
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
