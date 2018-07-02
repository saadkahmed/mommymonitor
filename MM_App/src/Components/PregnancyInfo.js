import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, ScrollView, Picker, Image, Platform, DatePickerIOS } from 'react-native';
import Button from './common/Button';

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

const OtherFormdatepicker = null;
// try {
//   const {action, year, month, day} = await DatePickerAndroid.open({
//     // Use `new Date()` for current date.
//     // May 25 2020. Month 0 is January.
//     date: new Date(2020, 4, 25)
//   });
//   if (action !== DatePickerAndroid.dismissedAction) {
//     // Selected year, month (0-11), day
//   }
// } catch ({code, message}) {
//   console.warn('Cannot open date picker', message);
// };
const NewFormDatePicker = Platform.OS === 'ios' ? DatePickerIOS : OtherFormdatepicker;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************

// need to add input checking

class PregnancyInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_children: '0',
        expecting_date: new Date(),
        number_children: '0',
        trimester: '0'
      };
  }

  componentWillMount() {
      const { currentUser } = firebase.auth();
      //pull the info and pass it to payload
      firebase
      .database()
      .ref(`/users/${currentUser.uid}/userinfo`)
      .on('value', snapshot => {
        if (snapshot.val() != null) {
            this.setState(snapshot.val());
            }
          });
      }

  Registration2Submit(values) {
    const { currentUser } = firebase.auth();
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/userinfo`)
        .update({ ...values, expecting_date: values.expecting_date.toString() })
        .then(() => {
            this.props.navigation.navigate('PickPackage');
        })
        .catch(err => {
          console.log(err);
        });
    }


  render() {
    return (

        <View style={{ backgroundColor: 'transparent' }}>
            {/*show a spinner until the data is pulled from firebase/ pulled from redux*/}
            <View style={{ paddingTop: 10 }}>
                <Image style={[{ position: 'absolute' }]} source={backgroundpic} />
            </View>
            <ScrollView>
                <Text style={styles.titleLabelStyle}>PREGNANCY</Text>

                <Picker
                    selectedValue={this.state.trimester}
                    onValueChange={(value) => {
                        this.setState({ trimester: value });
                     }}
                >
                <Picker.Item label="First Trimester" value="0" />
                <Picker.Item label="Second Trimester" value="1" />
                <Picker.Item label="Third Trimester" value="2" />
                </Picker>

                <Picker
                    selectedValue={this.state.number_children}
                    onValueChange={(value) => {
                        this.setState({ number_children: value });
                     }}
                >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                </Picker>

                <Picker
                    selectedValue={this.state.current_children}
                    onValueChange={(value) => {
                        this.setState({ current_children: value });
                     }}
                >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                </Picker>

                <NewFormDatePicker
                    style={styles.pickerStyle}
                    date={new Date(this.state.expecting_date)}
                    onDateChange={(value) => this.setState({ expecting_date: value })}
                    mode='date'
                />

                <Button
                    onPress={() => { this.Registration2Submit(this.state); }}
                >
                    Submit and Continue
                </Button>

            </ScrollView>
        </View>
    );
  }
}

const styles = {
  titleLabelStyle: {
    padding: 7,
    paddingLeft: 10,
    fontSize: 20,
    color: '#00bbdd',
    fontFamily: 'Futura-CondensedMedium'
    },
    pickerStyle: {
      paddingLeft: 30,
      paddingRight: 30,
    }
};

export default PregnancyInfo;
