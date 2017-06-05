import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import t from 'tcomb-form-native';

var Form = t.form.Form;

var Profile = t.struct({
    profileName: t.String,
    number: t.String,
    email: t.maybe(t.String),
    linkedin: t.maybe(t.String),
});

var options = {};

class NewProfileForm extends Component {
    onPress() {
        var value = this.refs.form.getValue();
        if (value) {
            console.log(value);
        }
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <Form ref="form" type={Profile} options={options}/>
                <TouchableHighlight style={styles.formButton} onPress={this.onPress}>
                    <Text style={styles.formButtonText}>Save</Text>
                </TouchableHighlight>
            </View>
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
    },

    formButton: {
    },

    formButtonText: {
    },
});
