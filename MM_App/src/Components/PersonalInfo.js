import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, ScrollView, Picker, Image, } from 'react-native';

import ExTextInput from './common/ExTextInput';
import Button from './common/Button';

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

// need to add input checking

class PersonalInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age: '',
        ethnicity: '0',
        first_name: '',
        last_name: '',
        marital_status: '0',
        phone_number: '',
        postal_code: '',
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
            .update({ ...values })
            .then(() => {
                this.props.navigation.navigate('PregnancyInfo');
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
                <Text style={styles.titleLabelStyle}>PERSONAL INFO</Text>

                <ExTextInput
                    name='First Name'
                    textChange={(text) => {
                        this.setState({ first_name: text });
                      }}
                    capital='words'
                    correct={false}
                    value={this.state.first_name}
                    holder={'John'}
                />

                <ExTextInput
                    name='Last Name'
                    textChange={(text) => {
                        this.setState({ last_name: text });
                      }}
                    capital='words'
                    correct={false}
                    value={this.state.last_name}
                    holder={'Smith'}
                />

                <ExTextInput
                    name='Phone Number'
                    textChange={(text) => {
                        this.setState({ phone_number: text });
                      }}
                    correct={false}
                    value={this.state.phone_number}
                    keyboard='phone-pad'
                    holder={'5555555555'}

                />

                <ExTextInput
                    name='Postal Code'
                    textChange={(text) => {
                        this.setState({ postal_code: text });
                      }}
                    capital='characters'
                    correct={false}
                    value={this.state.postal_code}
                    holder={'A1B2C3'}
                />

                <ExTextInput
                    name='Age'
                    textChange={(text) => {
                        this.setState({ age: text });
                      }}
                    correct={false}
                    value={this.state.age}
                    keyboard='numeric'
                />

                <Picker
                    selectedValue={this.state.ethnicity}
                    onValueChange={(value) => {
                        this.setState({ ethnicity: value });
                     }}
                >
                    <Picker.Item
                        label="Aboriginal (Inuit, Métis, North American Indian)"
                        value="0"
                    />
                    <Picker.Item
                        label="Arab/West Asian"
                        value="1"
                    />
                    <Picker.Item
                        label="Black (e.g., African, Haitian, Jamaican, Somali)"
                        value="2"
                    />
                    <Picker.Item
                        label="Chinese"
                        value="3"
                    />
                    <Picker.Item
                        label="Filipino"
                        value="4"
                    />
                    <Picker.Item
                        label="Japanese"
                        value="5"
                    />
                    <Picker.Item
                        label="Korean"
                        value="6"
                    />
                    <Picker.Item
                        label="Latin American"
                        value="7"
                    />
                    <Picker.Item
                        label="South Asian"
                        value="8"
                    />
                    <Picker.Item
                        label="South East Asian"
                        value="9"
                    />
                    <Picker.Item
                        label="Caucasian" value="10"
                    />
                    <Picker.Item
                        label="Other"
                        value="11"
                    />
                </Picker>

                <Picker
                    selectedValue={this.state.marital_status}
                    onValueChange={(value) => {
                        this.setState({ marital_status: value });
                     }}
                >
                <Picker.Item label="Single" value="1" />
                <Picker.Item label="Married" value="2" />
                <Picker.Item label="Divorced" value="3" />
                </Picker>

                <Button
                    onPress={() => { this.Registration2Submit(this.state); }}
                >
                    Save and Continue
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

export default PersonalInfo;
