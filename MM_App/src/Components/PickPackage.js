import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';
//import { NavigationActions } from 'react-navigation';
//not used right now
import { connect } from 'react-redux';
import { Button, CardSection } from './common';

const applepay = 'appletext';
const androidpay = 'andoirdtext';
const newpay = Platform.OS === 'ios' ? applepay : androidpay;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

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

            <View style={styles.MainContainer}>
              <View style={{ paddingTop: 10 }}>
                  <Image style={[{ position: 'absolute' }]} source={backgroundpic} />
              </View>
                <Text style={styles.titleLabelStyle}>PICK A PACKAGE</Text>
                <CardSection>
                  <Button onPress={() => this.goToPay(1)}> Option 1 </Button>
                </CardSection>

                <CardSection>
                  <Button onPress={() => this.goToPay(2)}> Option 2 </Button>
                </CardSection>

                <CardSection>
                  <Button onPress={() => this.goToPay(3)}> Option 3 </Button>
                </CardSection>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    titleLabelStyle: {
      padding: 8,
      paddingLeft: 16,
      marginBottom: 8,
      fontSize: 20,
      color: '#00bbdd',
      fontFamily: 'fjalla-one'
    }
});
// dont have to check for packages for maternal mentor
//
export default connect(null, {})(PickPackage);
