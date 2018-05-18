import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
//import { NavigationActions } from 'react-navigation';
//not used right now
import { connect } from 'react-redux';
import { Button } from './common';

const applepay = 'appletext';
const androidpay = 'andoirdtext';
const newpay = Platform.OS === 'ios' ? applepay : androidpay;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************


class PickPackage extends Component {
    componentWillMount() {
        //console.log('this is the pick Package screen \n', this.props);
    }
    goToPay(product) {
        console.log(newpay, product);
        this.props.navigation.navigate('PickMentor');
    }

    render() {
        return (
            <View>
                <Text> Pick a Package </Text>
                <Button onPress={() => this.goToPay(1)}> Option 1 </Button>
                <Button onPress={() => this.goToPay(2)}> Option 2 </Button>
                <Button onPress={() => this.goToPay(3)}> Option 3 </Button>
            </View>
        );
    }
}
// dont have to check for packages for maternal mentor
//
export default connect(null, {})(PickPackage);
