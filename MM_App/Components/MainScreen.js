// for some reason i cant do flexDirection column its not working, so i just hardcoded it to 100, try to fix this later

import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, Alert,TextInput } from 'react-native';
import firebase from 'firebase';

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    loginuser () {
        const { navigate } = this.props.navigation;
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then( function(user){
             navigate('SomeScreen');
        }).catch(function(e){ alert(e); });
    }

  render() {
      const {navigate} = this.props.navigation;
    return (
        <ImageBackground source={require('../pictures/BackgroundForPages.jpg')} style={styles.backgroundImage}>

        <TextInput style={styles.emailstyle}
            onChangeText={(email) => this.setState({email})}
            placeholder={"Enter Email"}
            placeholderTextColor={"#CCC"}/>


        <TextInput style={styles.passwordstyle}
            onChangeText={(password) => this.setState({password})}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            color={"black"}
            placeholderTextColor={"#CCC"}/>


            <TouchableOpacity onPress={ this.loginuser.bind(this) }>
                <View style={styles.container}>
                    <Text style={styles.signInButton}> Sign In </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Register')}>
                <View style={styles.container}>
                    <Text style={styles.signInButton}> Register </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Forgot')}>
                <View style={styles.container}>
                    <Text style={styles.signInButton}> Forgot Password </Text>
                </View>
            </TouchableOpacity>

        </ImageBackground>
    );
  }
}


let styles = StyleSheet.create({
    emailstyle: {
        height: 50,
        width: 150,
        alignSelf: "center",
        marginTop: 20,
    },
    passwordstyle: {
        height: 50,
        width: 150,
        alignSelf: "center",
        marginTop: 10,
    },

    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
      },

    signInButton: {
        color: 'black',
        fontSize: 30,
        backgroundColor: 'transparent',
    }
});
