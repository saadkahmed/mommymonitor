/** this is the Pregnancy info forum
** i use my own text input class so dont change anything inside
** the ExTextInput jsx. this also uses a async function to display
** time and date on android. both datepickers are fixed and working.
**
**/
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
    DatePickerAndroid
    } from 'react-native';
import Button from './common/Button';
import ExTextInput from './common/ExTextInput';

let FONT_BACK_LABEL = 18;

if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}
const backgroundpic = require('./../../pictures/BackgroundForPages.jpg');

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

    async exDatePickerAndroid() {
      //const { action, year, month, day } = await DatePickerAndroid.open({
      const { action } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.log(action);
      }
    } catch({ code, message }) {
      console.warn('Cannot open date picker', message);
      console.log(code);
    }

renderone = () => {
    if (Platform.OS === 'ios') {
        return (
        <View style={styles.itemContainer}>
         <Text style={styles.subTitleStyle}> EXPECTING DATE </Text>
           <DatePickerIOS
               date={new Date(this.state.expecting_date)}
               onDateChange={(value) => this.setState({ expecting_date: value })}
               mode='date'
           />
        </View>
        );
    }
        return (
            <View Style={styles.itemContainer}>
                <Text style={styles.subTitleStyle}> EXPECTING DATE </Text>
                <Button
                    onPress={() => { this.exDatePickerAndroid(); }}
                >
                    {this.state.expecting_date}
                </Button>
            </View>
        );
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

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ current_children: text });
                      }}
                    keyboard='numeric'
                    value={this.state.current_children}
                    holder='NUMBER OF CURRENT CHILDREN'
                />

                <ExTextInput
                    textStyle={styles.inputStyle}
                    textChange={(text) => {
                        this.setState({ number_children: text });
                      }}
                    keyboard='numeric'
                    value={this.state.number_children}
                    holder='EXPECTING NUMBER OF CHILDREN'
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

                {this.renderone()}

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
    borderBottomColor: '#ddd',
    flex: 0.9,
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
