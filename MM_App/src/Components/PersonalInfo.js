/** this is the personal info forum
** i use my own text input class so dont change anything inside
** the ExTextInput jsx.
**
**
**/
import firebase from 'firebase';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  Picker,
  Image,
  PixelRatio
} from 'react-native';

import Button from './common/Button';
import ExTextInput from './common/ExTextInput';

let FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');
// need to add input checking
// age and name etc are not being saved?
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
      first_language: '',
      second_language: '',
      citizenship: '',
      Sexual_Orientation: '',
      Gender_Identity: '',
    };
  }

  UNSAFE_componentWillMount() {
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

  Registration2Submit = (values) => {
    console.log(values);
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/publicinfo`)
      .update({ first_name: values.first_name, last_name: values.last_name });

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
                <Text style={styles.titleLabelStyle}>
                Personal Info
                </Text>

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ first_name: text });
                      }}
                    capital='words'
                    value={this.state.first_name}
                    holder='FIRST NAME'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ last_name: text });
                      }}
                    capital='words'
                    value={this.state.last_name}
                    holder='LAST NAME'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ phone_number: text });
                      }}
                    value={this.state.phone_number}
                    keyboard='phone-pad'
                    capital='words'
                    holder='PHONE NUMBER'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ age: text });
                      }}
                    value={this.state.age}
                    keyboard='numeric'
                    holder='AGE'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ postal_code: text });
                      }}
                    capital='characters'
                    value={this.state.postal_code}
                    holder='POSTAL CODE'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ first_language: text });
                      }}
                    capital='words'
                    value={this.state.first_language}
                    holder='English'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ second_language: text });
                      }}
                    capital='words'
                    value={this.state.second_language}
                    holder='French'
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

                <View style={styles.itemContainer}>
                         this.languages
                </View>
                {/**add text picker for if the user picked other**/}

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> Sexual Orientation </Text>
                  <Picker
                      itemStyle={styles.tabTextStyle}
                      style={styles.pickerStyle}
                      selectedValue={this.state.Sexual_Orientation}
                      onValueChange={(value) => {
                          this.setState({ Sexual_Orientation: value });
                       }}
                  >
                      <Picker.Item
                          label="Heterosexual"
                          value="Heterosexual"
                      />
                      <Picker.Item
                          label="Bisexual"
                          value="Bisexual"
                      />
                      <Picker.Item
                          label="Gay/Lesbian"
                          value="Gay/Lesbian"
                      />
                      <Picker.Item
                          label="Other"
                          value="Other"
                      />
                  </Picker>
                </View>
                {/**add text picker for if the user picked other**/}

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> Gender Identity </Text>
                  <Picker
                      itemStyle={styles.tabTextStyle}
                      style={styles.pickerStyle}
                      selectedValue={this.state.Gender_Identity}
                      onValueChange={(value) => {
                          this.setState({ Gender_Identity: value });
                       }}
                  >
                      <Picker.Item
                          label="Female"
                          value="Female"
                      />
                      <Picker.Item
                          label="Male"
                          value="Male"
                      />
                      <Picker.Item
                          label="Transgender"
                          value="Transgender"
                      />
                      <Picker.Item
                          label="Non-Binary"
                          value="Non-Binary"
                      />
                      <Picker.Item
                          label="Two-spirit"
                          value="Two-spirit"
                      />
                      <Picker.Item
                          label="other"
                          value="Other"
                      />
                  </Picker>
                </View>
                {/**add text picker for if the user picked other**/}
                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> Citizenship </Text>
                  <Picker
                      itemStyle={styles.tabTextStyle}
                      style={styles.pickerStyle}
                      selectedValue={this.state.citizenship}
                      onValueChange={(value) => {
                          this.setState({ citizenship: value });
                       }}
                  >
                      <Picker.Item
                          label="Permenant resident"
                          value="Permenant resident"
                      />
                      <Picker.Item
                          label="Refugee"
                          value="Refugee"
                      />
                      <Picker.Item
                          label="Asylum Seeker"
                          value="Asylum Seeker"
                      />
                      <Picker.Item
                          label="Undocumented"
                          value="Undocumented"
                      />
                      <Picker.Item
                          label="Prefer Not To Disclose"
                          value="Prefer Not To Disclose"
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
    borderBottomColor: '#ddd',
    flex: 0.9,
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


// languages = [{
//       id:"English",
//       name:"English"
//   },
//   {
//       id:"French",
//       name:"French"
//   },
//   {
//       id:"Cantonese",
//       name:"Cantonese"
//   },
//   {
//       id:"Mandarin",
//       name:"Mandarin"
//   },
//   {
//       id:"Tagalog",
//       name:"Tagalog"
//   },
//   {
//       id:"Italian",
//       name:"Italian"
//   },
//   {
//       id:"Spanish",
//       name:"Spanish"
//   },
//   {
//       id:"Tamil",
//       name:"Tamil"
//   },
//   {
//       id:"Urdu",
//       name:"Urdu"
//   },
//   {
//       id:"Portugese",
//       name:"Portugese"
//   },
//   {
//       id:"Panjabi (or Punjabi)",
//       name:"Panjabi (or Punjabi)"
//   },
//   {
//       id:"Arabic",
//       name:"Arabic"
//   },
//   {
//       id:"Somali",
//       name:"Somali"
//   },
//   {
//       id:"Other",
//       name:"Other"
//   }];
