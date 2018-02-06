import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const profilePic = require('../../pictures/ProfilePic.png');

class ProfileAnalytics extends React.Component {

render() {
  return (
    <View style={styles.Mainviewstyle}>

      <View style={styles.Profileheaderstyle}>

        <View style={styles.Profilepicviewstyle}>
          <Image
            source={profilePic}
            style={styles.Profileimagestyle}
          />
        </View>

        <View style={styles.Profiletextviewstyle}>
          <Text style={styles.Profilenametextstyle}>
            Username: Bobby Green
          </Text>
          <Text style={styles.Profileexpectingtextstyle}>
            Expecting Date: 4 months
          </Text>
        </View>

      </View>


      <View style={styles.Pseudoliststyle}>
            <View>
              <Text> Statistic blocks go here (ListView) </Text>
            </View>
      </View>

    </View>
    );
  }
}

let styles = StyleSheet.create({
  Mainviewstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor: '#FFEFF9'
  },
  Profileheaderstyle: {
    flex: 0.3,
    flexDirection: 'row',
    height: 100,
  },
  Profilepicviewstyle: {
    flex: 0.5,
  },
  Profileimagestyle: {
    width: 60,
    height: 60,
    margin: 15,
    borderRadius: 30,
  },
  Profiletextviewstyle: {
    fles: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    height: 100,
  },
  Profilenametextstyle: {
    fontSize: 18,
  },
  Profileexpectingtextstyle: {
    fontSize: 12,
  },
  Pseudoliststyle: {
    backgroundColor: '#F5F5F5',
    flex: 1.7,
    height: 100,
  }

});

export default ProfileAnalytics;
