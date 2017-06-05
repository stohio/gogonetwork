import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';


class PhoneInputBox extends Component {
    render() {
        return (
            <View style={styles.phoneInputForm}>
                <View style={styles.phoneInputField}>
                    <TextInput style = {styles.phoneInputText}
                        keyboardType='phone-pad'
                        placeholder='phone number'
                        underlineColorAndroid='transparent'/>
                </View>
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
            <PhoneInputBox/>
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

    phoneInputField: {
        backgroundColor: 'white',
    },

    phoneInputText: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
    }
});
