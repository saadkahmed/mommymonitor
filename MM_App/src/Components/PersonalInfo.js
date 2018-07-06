import firebase from 'firebase';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Picker,
  Image,
  PixelRatio,
  TextInput
} from 'react-native';

import Button from './common/Button';

let FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

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
      marital_status: 0,
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

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ first_name: text });
                      }}
                    autoCapitalize='words'
                    value={this.state.first_name}
                    placeholder='FIRST NAME'
                />

                <TextInput
                    style={styles.inputStyle}
                    name='Last Name'
                    onChangeText={(text) => {
                        this.setState({ last_name: text });
                      }}
                    autoCapitalize='words'
                    value={this.state.last_name}
                    placeholder='LAST NAME'
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ phone_number: text });
                      }}
                    value={this.state.phone_number}
                    keyboard='phone-pad'
                    autoCapitalize='words'
                    placeholder='PHONE NUMBER'
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ postal_code: text });
                      }}
                    autoCapitalize='characters'
                    value={this.state.postal_code}
                    placeholder='POSTAL CODE'
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ age: text });
                      }}
                    value={this.state.age}
                    keyboard='numeric'
                    placeholder='AGE'
                />

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> MARITAL STATUS </Text>
                  <SegmentedControlTab
                    activeTabStyle={styles.activeTabStyle}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    values={['Single', 'Married', 'Divorced']}
                    selectedIndex={parseInt(this.state.marital_status, 10)}
                    onTabPress={(value) => {
                        this.setState({ marital_status: value });
                     }}
                  />
                </View>

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> ETHNICITY </Text>
                  <Picker
                      itemStyle={styles.tabTextStyle}
                      style={styles.pickerStyle}
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
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                      onPress={() => { this.Registration2Submit(this.state); }}
                  >
                      Save and Continue
                  </Button>
                </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = {
  titleLabelStyle: {
    padding: 8,
    paddingLeft: 16,
    marginBottom: 8,
    fontSize: 20,
    color: '#00bbdd',
    fontFamily: 'fjalla-one',
  },
  pickerStyle: {
    paddingRight: 32,
    paddingLeft: 32,
  },
  inputStyle: {
    paddingRight: 16,
    paddingBottom: 8,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 24,
    color: '#000',
    fontSize: FONT_BACK_LABEL,
    fontFamily: 'fjalla-one',
    lineHeight: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd'
  },
  itemContainer: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    marginBottom: 16,
  },
  activeTabStyle: {
    backgroundColor: '#852053',
    opacity: 0.7
  },
  tabStyle: {
    borderColor: '#852053',
    backgroundColor: 'transparent',
    opacity: 0.7,
  },
  tabTextStyle: {
    color: 'grey',
    fontFamily: 'fjalla-one'
  },
  subTitleStyle: {
    paddingBottom: 8,
    fontSize: FONT_BACK_LABEL,
    fontFamily: 'fjalla-one',
    opacity: 0.8
  },
  buttonContainer: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 32
  }
};

export default PersonalInfo;
