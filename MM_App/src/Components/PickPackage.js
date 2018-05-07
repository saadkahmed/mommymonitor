import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class PickPackage extends Component {
    render() {
        return (
            <View>
                <Text> Hello Cristina </Text>
            </View>
        );
    }
}

export default connect(null, {})(PickPackage);
