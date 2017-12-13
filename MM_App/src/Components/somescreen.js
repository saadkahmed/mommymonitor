// create back button
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class IForgot extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text> Hello user </Text>
        </View>
    );
  }
}

let styles = StyleSheet.create({
    emailstyle: {
        height: 50,
        width: 150,
        alignSelf: 'center',
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
        width: 300,
        backgroundColor: 'green',
        height: 50,
        justifyContent: 'center',
    },
    textstuff: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
    }
});
