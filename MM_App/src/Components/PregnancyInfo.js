import firebase from 'firebase';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Platform,
    DatePickerIOS,
    PixelRatio,
    TextInput
    } from 'react-native';
import Button from './common/Button';

let FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

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
const NewFormDatePicker = Platform.OS === 'ios' ? DatePickerIOS : DatePickerAndroid;
//****************USE THIS FOR ANDROID OR IOS DEV***********************************

// need to add input checking

class PregnancyInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_children: '',
        expecting_date: new Date(),
        number_children: '',
        trimester: 0
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
                <Text style={styles.titleLabelStyle}>
                {'Pregnancy'.toUpperCase()}
                </Text>

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ current_children: text });
                      }}
                    keyboard='numeric'
                    value={this.state.current_children}
                    placeholder='NUMBER OF CURRENT CHILDREN'
                />

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => {
                        this.setState({ number_children: text });
                      }}
                    keyboard='numeric'
                    value={this.state.number_children}
                    placeholder='EXPECTING NUMBER OF CHILDREN'
                />

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}>TRIMESTER</Text>
                  <SegmentedControlTab
                    activeTabStyle={styles.activeTabStyle}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    values={['First', 'Second', 'Third']}
                    selectedIndex={parseInt(this.state.trimester, 10)}
                    onTabPress={(value) => {
                        this.setState({ trimester: value });
                     }}
                  />
                </View>

                <View style={styles.itemContainer}>
                  <Text style={styles.subTitleStyle}> EXPECTING DATE </Text>
                    <NewFormDatePicker
                        date={new Date(this.state.expecting_date)}
                        onDateChange={(value) => this.setState({ expecting_date: value })}
                        mode='date'
                    />
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                      onPress={() => { this.Registration2Submit(this.state); }}
                  >
                      Submit and Continue
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
  datePickerContainer: {
    marginTop: 16,
    marginLeft: 32,
    marginRight: 32
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

export default PregnancyInfo;
