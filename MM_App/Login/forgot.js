// create back button


import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import firebase from 'firebase';

export default class IForgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }

    }
    submitinfo () {
        firebase.auth().sendPasswordResetEmail(this.state.email).then(function(){
            Alert.alert("Email Sent");
        }).catch(function(e){ alert(e); })
    }
  render() {
    return (
        <View style={styles.container}>

        <TextInput style={styles.emailstyle}
            onChangeText={(email) => this.setState({email})}
            placeholder={"Enter Email"}
            placeholderTextColor={"#CCC"}/>

        <TouchableOpacity style={styles.loginbox} onPress={this.submitinfo.bind(this)}>
            <View>
                <Text style={styles.textstuff}>ForgotPassword</Text>
            </View>
        </TouchableOpacity>
        </View>

    );
  }
}

let styles = StyleSheet.create({
    emailstyle: {
        height: 50,
        width: 150,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginbox: {
        width:300,
        backgroundColor:'green',
        height:50,
        justifyContent: "center",
    },
    textstuff: {
        fontSize: 20,
        color: 'white',
        alignSelf: "center",
    }
});
