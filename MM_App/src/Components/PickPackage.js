import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';

const applepay = 'text';
const androidpay = 'text';
const newpay = Platform.OS === 'ios' ? applepay : androidpay;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************


class PickPackage extends Component {
    goToPay(product) {
        newpay(product);
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

export default connect(null, {})(PickPackage);
